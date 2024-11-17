// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {TokenC} from "../src/TokenC.sol";

contract DeployTokenC is Script {
    function run() public returns (address) {
        vm.startBroadcast();
        TokenC tokenC = new TokenC();
        vm.stopBroadcast();
        return address(tokenC);
    }
}
