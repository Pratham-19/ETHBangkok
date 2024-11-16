// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import "forge-std/console.sol";

import {HelperConfig} from "./HelperConfig.s.sol";
import {RandomNumber} from "../src/RandomNumber.sol";

contract DeployRandomNumber is Script {
    function deployRandomNumber(address entropy) public returns (address) {
        vm.startBroadcast();
        RandomNumber randomNumber = new RandomNumber(entropy);
        vm.stopBroadcast();

        return address(randomNumber);
    }

    function deployRandomNumberUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address entropy = helperConfig.getPythEntropy(block.chainid);
        console.log("Entropy address: ", entropy);
        deployRandomNumber(entropy);
    }

    function run() public {
        deployRandomNumberUsingConfigs();
    }
}
