// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Vault} from "./Vault.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Marketplace {
    event ItemBought(address buyer, uint256 index);

    Vault public vault;
    IERC20 public tokenA;
    IERC20 public tokenB;

    constructor(address _vault, address _tokenA, address _tokenB) {
        vault = Vault(_vault);
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    function buyItem(uint256 _index) public payable {
        require(_index < 4, "Invalid index");
        uint256 price;
        if (_index == 1) {
            price = 1e15;
        } else if (_index == 2) {
            price = 1e14;
        } else if (_index == 3) {
            price = 1e13;
        } else {
            price = 1e14;
        }
        require(msg.value >= price, "Insufficient Funds");

        (bool success,) = payable(msg.sender).call{value: msg.value}("");
        require(success, "Transfer failed");
        sendTokens(_index, msg.sender);
        emit ItemBought(msg.sender, _index);
    }

    function sendTokens(uint256 _index, address _user) public {
        if (_index == 1) {
            vault.sendToken(50e18, address(tokenA), _user);
            vault.sendToken(50e18, address(tokenB), _user);
        } else if (_index == 2) {
            vault.sendToken(40e18, address(tokenA), _user);
        } else if (_index == 3) {
            vault.sendToken(25e18, address(tokenB), _user);
        } else {
            vault.sendToken(15e18, address(tokenA), _user);
        }
    }
}
