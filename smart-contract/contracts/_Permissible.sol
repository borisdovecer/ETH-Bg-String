// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

error NoTokenFound();
error NotYourToken();
error CompanyDoesNotExist();
error CallerDoesntHavePermissions();

abstract contract Permissible is Ownable {

    constructor(){}

    // modifier onlyOwnerOf(uint256 _tokenId) {
    //     if (ownerOf(_tokenId) != msg.sender)
    //         revert NotYourToken();
    //     if (!_exists(_tokenId))
    //         revert NoTokenFound();
    //     _;
    // }
}