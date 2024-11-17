// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {Vault} from "../src/Vault.sol";

contract DeployVault is Script {
    function run() public returns (address) {
        vm.startBroadcast();
        Vault vault = new Vault();
        vm.stopBroadcast();
        return address(vault);
    }
}
