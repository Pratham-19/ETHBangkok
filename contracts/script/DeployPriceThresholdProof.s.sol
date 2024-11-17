// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {PriceThresholdProof} from "../src/PriceThresholdProof.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployPriceThresholdProof is Script {
    function deployPriceThresholdProof(address priceFeed, address priceAttester) public returns (address) {
        vm.startBroadcast();
        PriceThresholdProof priceFeedProof = new PriceThresholdProof(priceFeed, priceAttester);
        vm.stopBroadcast();

        return address(priceFeedProof);
    }

    function deployPriceThresholdProofUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address priceFeed = helperConfig.getPriceFeed(block.chainid);
        address priceAttester = helperConfig.getPriceAttester(block.chainid);

        deployPriceThresholdProof(priceFeed, priceAttester);
    }

    function run() public {
        deployPriceThresholdProofUsingConfigs();
    }
}
