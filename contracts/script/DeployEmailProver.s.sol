// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {EmailProver} from "../src/vlayer/EmailProver.sol";

contract DeployEmailProver is Script {
    function run() public returns (address) {
        vm.startBroadcast();
        EmailProver emailProver = new EmailProver();
        vm.stopBroadcast();
        return address(emailProver);
    }
}
