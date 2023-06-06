// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "./_StringModel.sol";

error NoTokenFound();
error NotYourToken();
error CompanyDoesNotExist();
error CallerDoesntHavePermissions();

abstract contract Permissible is ERC721Enumerable, StringModel {

    constructor(){}

    modifier canMint(Company storage company) {
        doesCompanyExist(company);
        Role storage incomingEmployeeRoles = company.employees[msg.sender].permissions;
        require(incomingEmployeeRoles.canMint, "Caller does not have permission to mint");
        _;
    }

    modifier canTransfer(Company storage company) {
        doesCompanyExist(company);
        Role storage incomingEmployeeRoles = company.employees[msg.sender].permissions;
        require(incomingEmployeeRoles.canTransfer, "Caller does not have permission to transfer");
        _;
    }

    modifier canDefine(Company storage company) {
        doesCompanyExist(company);
        Role storage incomingEmployeeRoles = company.employees[msg.sender].permissions;
        require(incomingEmployeeRoles.canDefine, "Caller does not have permission to define");
        _;
    }

    modifier canAuthorize(Company storage company) {
        doesCompanyExist(company);
        Role storage incomingEmployeeRoles = company.employees[msg.sender].permissions;
        require(incomingEmployeeRoles.canAuthorize, "Caller does not have permission to authorize");
        _;
    }

    modifier onlyOwnerOf(uint256 _tokenId) {
        if (ownerOf(_tokenId) != msg.sender)
            revert NotYourToken();
        if (!_exists(_tokenId))
            revert NoTokenFound();
        _;
    }

    function doesCompanyExist(Company storage company) private view {
        if(company.initialized != 0){
            revert CompanyDoesNotExist();
        }
    }

}