// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "../HelperConfig.s.sol";
import {PriceAttester} from "../../src/attestation/PriceAttester.sol";

contract SetSchemaId is Script {
    function setSchemaId(uint64 schemaId_, address dataAttester_) public {
        vm.startBroadcast();
        PriceAttester dataAttester = PriceAttester(dataAttester_);

        dataAttester.setSchemaID(schemaId_);

        vm.stopBroadcast();
    }

    function setSchemaIdUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address dataAttester = helperConfig.getPriceAttester(block.chainid);
        uint64 schemaId = 0x4e8;
        setSchemaId(schemaId, dataAttester);
    }

    function run() public {
        setSchemaIdUsingConfigs();
    }
}

contract SetSPInstance is Script {
    function setSPInstance(address ispInstance_, address dataAttester_) public {
        vm.startBroadcast();
        PriceAttester dataAttester = PriceAttester(dataAttester_);

        dataAttester.setSPInstance(ispInstance_);

        vm.stopBroadcast();
    }

    function setSPInstanceUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address spInstance = helperConfig.getSPInstance(block.chainid);
        address dataAttester = helperConfig.getPriceAttester(block.chainid);

        setSPInstance(spInstance, dataAttester);
    }

    function run() public {
        setSPInstanceUsingConfigs();
    }
}

contract TestAttest is Script {
    function attest(address dataAttester_, bool result_, uint256 timestamp_) public {
        vm.startBroadcast();
        PriceAttester dataAttester = PriceAttester(dataAttester_);

        dataAttester.attest(msg.sender, result_, timestamp_);

        vm.stopBroadcast();
    }

    function attestUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address dataAttester = helperConfig.getPriceAttester(block.chainid);

        bool result = true;
        uint256 timestamp = block.timestamp;

        attest(dataAttester, result, timestamp);
    }

    function run() public {
        attestUsingConfigs();
    }
}
