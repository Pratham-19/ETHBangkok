// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {PriceFeed} from "../src/PriceFeed.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployPriceFeed is Script {
    function deployPriceFeed(address chronicle, address selfKisser) public returns (address) {
        vm.startBroadcast();
        PriceFeed priceFeed = new PriceFeed(chronicle, selfKisser);
        vm.stopBroadcast();

        return address(priceFeed);
    }

    function deployPriceFeedUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        (address chronicle, address selfKisser) = helperConfig.getChronicleDetails(block.chainid);

        // Deploy Chronicle
        deployPriceFeed(chronicle, selfKisser);
    }

    function run() public {
        deployPriceFeedUsingConfigs();
    }
}
