// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "./HelperConfig.s.sol";

import {Claim} from "../src/Claim.sol";

contract DeployClaim is Script {
    function deployClaim(address dataAttester, address tokenA, address tokenB, address tokenC, address tokenD)
        public
        returns (address)
    {
        vm.startBroadcast();
        Claim claim = new Claim(dataAttester, tokenA, tokenB, tokenC, tokenD);
        vm.stopBroadcast();

        return address(claim);
    }

    function deployClaimUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address dataAttester = helperConfig.getDataAttester(block.chainid);
        address tokenA = helperConfig.getTokenA(block.chainid);
        address tokenB = helperConfig.getTokenB(block.chainid);
        address tokenC = helperConfig.getTokenC(block.chainid);
        address tokenD = helperConfig.getTokenD(block.chainid);

        deployClaim(dataAttester, tokenA, tokenB, tokenC, tokenD);
    }

    function run() public {
        deployClaimUsingConfigs();
    }
}
