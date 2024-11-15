// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

import {HelperConfig} from "./HelperConfig.s.sol";
import {DataValidatorHook} from "../src/attestation/DataValidatorHook.sol";

contract DeployDataValidatorHook is Script {
    function deployDataValidatorHook() public returns (address) {
        vm.startBroadcast();
        DataValidatorHook dataValidatorHook = new DataValidatorHook();
        vm.stopBroadcast();

        return address(dataValidatorHook);
    }

    function deployDataValidatorHookUsingConfigs() public {
        deployDataValidatorHook();
    }

    function run() public {
        deployDataValidatorHookUsingConfigs();
    }
}
