// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "../HelperConfig.s.sol";
import {RandomNumber} from "../../src/RandomNumber.sol";

contract GetRandomNumber is Script {
    function getRandomNumber(address _randomNumberContract) public {
        vm.startBroadcast();
        RandomNumber randomContract = RandomNumber(_randomNumberContract);
        randomContract.requestRandomNumber(bytes32("random"));
    }

    function getRandomNumberUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address randomNumberContract = helperConfig.getRandomNumberContract(block.chainid);

        getRandomNumber(randomNumberContract);
    }

    function run() public {
        getRandomNumberUsingConfigs();
    }
}
