// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "./HelperConfig.s.sol";
import {DataAttester} from "../src/attestation/DataAttester.sol";

contract DeployDataAttester is Script {
    function deployDataAttester() public returns (address) {
        vm.startBroadcast();
        DataAttester dataAttester = new DataAttester();
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
