
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

abstract contract StringModel {

    mapping(uint16 => Company) companies;
    mapping(address => Employee) employees;
    mapping(uint64 => Product) products;
    mapping(uint128 => uint128) tokenIds;

    struct Company {
        string name;
        address[] employees;
        uint32[] products;
        uint32 productCount;
    }

    struct Employee {
        // 0 - can view
        // 1 - can transfer
        // 2 - can mint
        // 3 - can authorize
        uint128 companyId;
        uint8 permissions;
    }

    struct Product {
        string name;
        string metadata;
        uint64[] productTokens;
        bool exists;
    }

    struct Counters {
        uint16 companyCount;
        uint32 productCount;
        uint16 employeeCount;
        uint64 tokenIdCount;
    }

}