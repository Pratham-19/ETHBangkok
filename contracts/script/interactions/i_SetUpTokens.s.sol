// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {TokenA} from "../../src/TokenA.sol";
import {TokenB} from "../../src/TokenB.sol";

import {Vault} from "../../src/Vault.sol";

import {HelperConfig} from "../HelperConfig.s.sol";

contract SetUpTokens is Script {
    function setUpToken(address _tokenA, address _tokenB, address _vault) public {
        vm.startBroadcast();
        TokenA tokenA = TokenA(_tokenA);
        TokenB tokenB = TokenB(_tokenB);
        Vault vault = Vault(_vault);

        tokenA.mint(_vault, 100e18);
        tokenB.mint(_vault, 100e18);

        vm.stopBroadcast();
    }

    function setUpTokensUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address tokenA = helperConfig.getTokenA(block.chainid);
        address tokenB = helperConfig.getTokenB(block.chainid);
        address vault = helperConfig.getVault(block.chainid);
    }

    function run() public {
        setUpTokensUsingConfigs();
    }
}
