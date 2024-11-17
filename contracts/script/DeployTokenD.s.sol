// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {TokenD} from "../src/TokenD.sol";

contract DeployTokenD is Script {
    function run() public returns (address) {
        vm.startBroadcast();
        TokenD tokenD = new TokenD();
        vm.stopBroadcast();
        return address(tokenD);
    }
}
