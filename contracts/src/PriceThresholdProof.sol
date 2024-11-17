// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {PriceFeed} from "./PriceFeed.sol";

import {PriceAttester} from "./attestation/PriceAttester.sol";

contract PriceThresholdProof {
    PriceFeed public priceFeed;
    PriceAttester public priceAttester;

    uint256 public threshold = 3500e18;

    constructor(address priceFeed_, address priceAttester_) {
        priceFeed = PriceFeed(priceFeed_);
        priceAttester = PriceAttester(priceAttester_);
    }

    function setPriceFeed(address priceFeed_) public {
        priceFeed = PriceFeed(priceFeed_);
    }

    function check() public returns (bool) {
        bool result;
        uint256 price = priceFeed.read();
        if (price >= threshold) {
            result = true;
        } else {
            result = false;
        }
        priceAttester.attest(msg.sender, result, block.timestamp);
        return result;
    }
}
