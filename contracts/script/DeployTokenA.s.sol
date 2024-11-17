// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {TokenA} from "../src/TokenA.sol";

contract DeployTokenA is Script {
    function run() public returns (address) {
        vm.startBroadcast();
        TokenA tokenA = new TokenA();
        vm.stopBroadcast();
        return address(tokenA);
    }
}
