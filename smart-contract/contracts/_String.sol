// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
import "./_Base.sol";
import "./_Permissible.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

error InvalidProductIndex();
error MintTooMuchError();
error ProductDoesntExist();

contract StringNFT is BaseContract, Permissible {
    event CompanyData(Company company);

    function addCompany(string calldata _companyName) external {
        companies[counters.companyCount] = Company(_companyName, new address[](0), new uint32[](0), 0);
        counters.companyCount++;
    }

    function getCompanyBy(uint16 _companyId) external view returns  (Company memory) {
        Company memory company = companies[_companyId];
        return company;
    }

    function getAllCompanies() public view returns (Company[] memory) {
        Company[] memory allCompanies = new Company[](counters.companyCount);

        for (uint16 i = 0; i < counters.companyCount; i++) {
            allCompanies[i] = companies[i];
        }

        return allCompanies;
    }

    function removeCompany(uint16 _companyId) external {
        delete companies[_companyId];
        counters.companyCount--;
    }

    function addEmployeeToCompany(uint16 _companyId, address _employeeAddress, uint8 _permissions) external {
        employees[_employeeAddress] = Employee(_companyId, _permissions);
        companies[_companyId].employees.push(_employeeAddress);
        counters.employeeCount++;
    }

    function getEmployee(address _employeeAddress) external view returns (Employee memory){
        Employee memory employee = employees[_employeeAddress];
        return employee;
    }

    function getAllEmployeesInCompany(uint16 _companyId) external view returns (Employee[] memory) {
        Employee[] memory allEmployees = new Employee[](counters.employeeCount);
        Company memory company = companies[_companyId];

        for (uint256 i = 0; i < company.employees.length; i++) {
            allEmployees[i] = employees[company.employees[i]];
        }

        return allEmployees;
    }

    // this should also remove the employee from the employees array in the company
    function removeEmployee(address _employeeAddress) external{
        delete employees[_employeeAddress];
        counters.employeeCount--;
    }

    function addProductToCompany(uint16 _companyId, string memory _productName, string memory _metadata) external {
        products[counters.productCount] = Product(_productName, _metadata, new uint64[](0), true);
        companies[_companyId].products.push(counters.productCount);
        counters.productCount++;
    }

    function getProduct(uint64 _productId) external view returns (Product memory){
        Product memory product = products[_productId];
        return product;
    }

    function getAllProducts(uint16 _companyId) external view returns (Product[] memory) {
        Company memory company = companies[_companyId];
        Product[] memory allProducts = new Product[](counters.productCount);

        for (uint256 i = 0; i < company.products.length; i++) {
            allProducts[i] = products[company.products[i]];
        }
        return allProducts;
    }

    function removeProduct(uint64 _productId) external{
        delete products[_productId];
        counters.productCount--;
    }

    function mint(uint32 _productId) external {
        counters.tokenIdCount++;
        Product storage productToMint = products[_productId];

        // if(!product.exists){
            // revert ProductDoesntExist();
        // }

        productToMint.productTokens.push(counters.tokenIdCount);
       _mint(msg.sender, counters.tokenIdCount);
    }

    function burn(uint32 _tokenId) external{
        _burn(_tokenId);
    }

    function mintBulk(uint64 _productId, uint16 amount) external {
        if (amount > MAX_MINT_AMOUNT)
             revert MintTooMuchError();

        for (uint16 i = 0; i < amount; i++) {
            _mint(msg.sender, _productId);
        }
    }

    function transferTo(address to, uint256 _tokenId) external  {
        transferFrom(msg.sender, to, _tokenId);
    }

    function bulkTransfer(address to, uint256[] memory tokenIds) external {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            transferFrom(msg.sender, to, tokenIds[i]);
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

    constructor() ERC721("StringNFT", "SNFT") {}
}
