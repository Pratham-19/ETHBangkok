// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

contract HelperConfig is Script {
    struct ChronicleDetails {
        // ETH/USD
        address chronicle;
        address selfKisser;
    }

    uint256 constant CHAIN_ID_BASE_SEPOLIA = 84532;
    uint256 constant CHAIN_ID_SEPOLIA = 11155111;

    mapping(uint256 chainId => ChronicleDetails details) chronicleDetails;
    mapping(uint256 chainId => address) pythEntropys;

    constructor() {
        if (block.chainid == CHAIN_ID_BASE_SEPOLIA) {
            chronicleDetails[CHAIN_ID_BASE_SEPOLIA] = ChronicleDetails({
                chronicle: 0xea347Db6ef446e03745c441c17018eF3d641Bc8f,
                selfKisser: 0x70E58b7A1c884fFFE7dbce5249337603a28b8422
            });
            pythEntropys[CHAIN_ID_BASE_SEPOLIA] = 0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c;
        } else if (block.chainid == CHAIN_ID_SEPOLIA) {
            chronicleDetails[CHAIN_ID_BASE_SEPOLIA] = ChronicleDetails({
                chronicle: 0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603,
                selfKisser: 0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d
            });
            // TODO: Change Chain ID because Pyth don't exist on sepolia
            pythEntropys[CHAIN_ID_SEPOLIA] = 0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c;
        }
    }

    function getChronicleDetails(uint256 chainId_) public view returns (ChronicleDetails memory) {
        return chronicleDetails[chainId_];
    }

    function getPythEntropy(uint256 chainId_) public view returns (address) {
        return pythEntropys[chainId_];
    }
}