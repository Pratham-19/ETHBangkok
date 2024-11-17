// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {TokenB} from "../src/TokenB.sol";

contract DeployTokenB is Script {
    function run() public returns (address) {
        vm.startBroadcast();
        TokenB tokenB = new TokenB();
        vm.stopBroadcast();
        return address(tokenB);
    }
}
