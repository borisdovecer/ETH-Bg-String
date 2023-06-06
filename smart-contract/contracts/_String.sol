// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
import "./_Permissible.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

error InvalidProductIndex();
error MintTooMuchError();

contract StringNFT is Permissible, Ownable {
    using Strings for uint256;
    uint256 private currentTokenId = 0;
    uint16 public constant MAX_MINT_AMOUNT = 1000;
    uint public companyCounter = 0;

    mapping(uint => Company) public companies;

    constructor() ERC721("StringNFT", "SNFT") {}

    // Company and Employees:
    function addCompany(string memory _name) external onlyOwner {
        companies[companyCounter].name = _name;
        companies[companyCounter].initialized = 1;
        companyCounter++;
    }

    function removeCompany(uint companyId) external onlyOwner  {
        delete companies[companyId];
    }

    function addEmployee(uint _companyId, address _employee, Role memory _permissions) external {
        companies[_companyId].employees[_employee] = Employee({permissions: _permissions, companyId: _companyId});
    }

    function removeEmployee(uint _companyId, address _employee) external canAuthorize(companies[_companyId]) {
        Company storage company = companies[_companyId];
        delete company.employees[_employee];
    }

    // Products:
    function addProduct(
        uint _companyId,
        string memory _name,
        string memory _description,
        string memory _manufacturer,
        string memory _category,
        uint256 _expireDate
    ) external canDefine(companies[_companyId]) {
        Company storage company = companies[_companyId];
        company.productCount++;

        Product memory newProduct = Product({
            name: _name,
            description: _description,
            manufacturer: _manufacturer,
            category: _category,
            productTokens: new uint[](0),
            expireDate: _expireDate,
            exists: true
        });
        company.products[company.productCount] = newProduct;
    }

    function removeProduct(uint _companyId, uint256 _productId) external canDefine(companies[_companyId]) {
        Company storage company = companies[_companyId];
        Product storage product = company.products[_productId];

        require(product.productTokens.length == 0, "Product has tokens attached to it.");

        delete company.products[_productId];
    }


    function getProduct(uint _companyId, uint256 _productId) external view returns (Product memory) {
        Company storage company = companies[_companyId];
        Product storage product = company.products[_productId];
        require(product.exists , "Product does not exist");
        return product;
    }

    function getAllProducts(uint companyId) external view returns (Product[] memory) {
        Company storage company = companies[companyId];
        Product[] memory productArray = new Product[](company.productCount);

        for (uint i = 0; i < company.productCount; i++) {
            productArray[i] = company.products[i];
        }
        return productArray;
    }

    function getProductCount(uint _companyId) external view returns (uint256) {
        Company storage company = companies[_companyId];
        return company.productCount;
    }

    // Minting and transfer:
    function mint(uint _companyId, uint _productId) public canMint(companies[_companyId]) {
        currentTokenId++;
        Company storage company = companies[_companyId];
        Product storage product = company.products[_productId];
       require(product.exists , "Product does not exist");
        product.productTokens.push(currentTokenId);
       _mint(msg.sender, currentTokenId);
    }

    function updateProductInfo(uint _companyId, uint _productId) internal{

    }

    function mintBulk(uint _companyId, uint _productId, uint16 amount) external canMint(companies[_companyId]) {
        if (amount > MAX_MINT_AMOUNT)
             revert MintTooMuchError();

        for (uint16 i = 0; i < amount; i++) {
            mint(_companyId, _productId);
        }
    }

    function transfer(address to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
        transferFrom(msg.sender, to, _tokenId);
    }

    function bulkTransfer(address to, uint256[] memory tokenIds) public {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            transfer(to, tokenIds[i]);
        }
    }
    
    function walletOfOwner(address targetWallet) external view returns (uint256[] memory){
        uint256 tokenCount = balanceOf(targetWallet);
        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(targetWallet, i);
        }
        return tokensId;
    }

}
