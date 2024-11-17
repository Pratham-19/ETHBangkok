// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {PriceValidatorHook} from "../src/attestation/PriceValidatorHook.sol";

contract DeployPriceValidatorHook is Script {
    function deployPriceValidatorHook() public returns (address) {
        vm.startBroadcast();
        PriceValidatorHook priceValidatorHook = new PriceValidatorHook();
        vm.stopBroadcast();

        return address(priceValidatorHook);
    }

    function deployPriceValidatorHookUsingConfigs() public {
        deployPriceValidatorHook();
    }

    function run() public {
        deployPriceValidatorHookUsingConfigs();
    }
}
