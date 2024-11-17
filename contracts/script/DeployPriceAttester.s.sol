// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "./HelperConfig.s.sol";
import {PriceAttester} from "../src/attestation/PriceAttester.sol";

contract DeployPriceAttester is Script {
    function deployDataAttester() public returns (address) {
        vm.startBroadcast();
        PriceAttester dataAttester = new PriceAttester();
        vm.stopBroadcast();

        return address(dataAttester);
    }

    function deployDataAttesterUsingConfigs() public {
        deployDataAttester();
    }

    function run() public {
        deployDataAttesterUsingConfigs();
    }
}
