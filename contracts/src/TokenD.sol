// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenD is ERC20 {
    constructor() ERC20("TokenD", "TKD") {
        _mint(msg.sender, 1000);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}