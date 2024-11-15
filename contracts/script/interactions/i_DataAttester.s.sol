// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";

import {HelperConfig} from "../HelperConfig.s.sol";
import {DataAttester} from "../../src/attestation/DataAttester.sol";

contract SetSchemaId is Script {
    function setSchemaId(uint64 schemaId_, address dataAttester_) public {
        vm.startBroadcast();
        DataAttester dataAttester = DataAttester(dataAttester_);

        dataAttester.setSchemaID(schemaId_);

        vm.stopBroadcast();
    }

    function setSchemaIdUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address dataAttester = helperConfig.getDataAttester(block.chainid);
        uint64 schemaId = 0x42d;
        setSchemaId(schemaId, dataAttester);
    }

    function run() public {
        setSchemaIdUsingConfigs();
    }
}

contract SetSPInstance is Script {
    function setSPInstance(address ispInstance_, address dataAttester_) public {
        vm.startBroadcast();
        DataAttester dataAttester = DataAttester(dataAttester_);

        dataAttester.setSPInstance(ispInstance_);

        vm.stopBroadcast();
    }

    function setSPInstanceUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address spInstance = helperConfig.getSPInstance(block.chainid);
        address dataAttester = helperConfig.getDataAttester(block.chainid);

        setSPInstance(spInstance, dataAttester);
    }

    function run() public {
        setSPInstanceUsingConfigs();
    }
}

contract TestAttest is Script {
    function attest(address dataAttester_, address recipient_, address user_, uint256 questId_, string memory location_)
        public
    {
        vm.startBroadcast();
        DataAttester dataAttester = DataAttester(dataAttester_);

        dataAttester.attest(recipient_, user_, questId_, location_);

        vm.stopBroadcast();
    }

    function attestUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address dataAttester = helperConfig.getDataAttester(block.chainid);

        address recipient = msg.sender;
        address user = msg.sender;
        uint256 questId = 1024;
        string memory location = "gmm";

        attest(dataAttester, recipient, user, questId, location);
    }

    function run() public {
        attestUsingConfigs();
    }
}
