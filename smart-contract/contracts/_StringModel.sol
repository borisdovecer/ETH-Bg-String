// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

abstract contract StringModel {
    struct Role {
        bool canMint;
        bool canTransfer;
        bool canDefine;
        bool canAuthorize;
    }

    struct Company {
        uint initialized;
        string name;
        mapping(address => Employee) employees;
        mapping(uint256 => Product) products;
        uint productCount;
    }

    struct Employee {
        Role permissions;
        uint companyId;
    }

    struct Product {
        string name;
        string description;
        string manufacturer;
        string category;
        uint[] productTokens;
        uint256 expireDate;
        bool exists;
    }

    constructor(){}
}