// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    mapping(address token => uint256 balance) balances;

    function sendToken(uint256 _value, address _token, address _to) public {
        IERC20 token = IERC20(_token);
        token.transferFrom(address(this), _to, _value);
    }

    function receiveToken(address _token, uint256 _value) public {
        IERC20 token = IERC20(_token);
        token.approve(address(this), _value);

        token.transferFrom(msg.sender, address(this), _value);

        balances[_token] += _value;
    }
}
