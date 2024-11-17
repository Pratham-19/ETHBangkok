// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {Marketplace} from "../src/Marketplace.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

contract DeployMarketPlace is Script {
    function deployMarketPlace(address _vault, address _tokenA, address _tokenB) public returns (address) {
        vm.startBroadcast();
        Marketplace marketPlace = new Marketplace(_vault, _tokenA, _tokenB);
        vm.stopBroadcast();

        return address(marketPlace);
    }

    function deployMarketPlaceUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address tokenA = helperConfig.getTokenA(block.chainid);
        address tokenB = helperConfig.getTokenB(block.chainid);
        address vault = helperConfig.getVault(block.chainid);
        deployMarketPlace(vault, tokenA, tokenB);
    }

    function run() public returns (address) {
        deployMarketPlaceUsingConfigs();
    }
}
