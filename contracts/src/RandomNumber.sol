// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {IEntropy} from "@pythnetwork/entropy-sdk-solidity/IEntropy.sol";
import {IEntropyConsumer} from "@pythnetwork/entropy-sdk-solidity/IEntropyConsumer.sol";

contract RandomNumber {
    address public constant ENTROPY_ADDRESS = 0x41c9e39574F40Ad34c79f1C99B66A45eFB830d4c;

    IEntropy entropy = IEntropy(ENTROPY_ADDRESS);

    function getEntropy() internal view returns (address) {
        return address(entropy);
    }

    function requestRandomNumber(bytes32 _input) public returns (uint64) {
        address provider = entropy.getDefaultProvider();

        uint256 fee = entropy.getFee(provider);
        uint64 sequenceNumber = entropy.requestWithCallback{value: fee}(provider, _input);

        return sequenceNumber;
    }

    function entropyCallback(
        uint64 sequenceNumber,
        // If your app uses multiple providers, you can use this argument to
        // distinguish which one is calling the app back.
        address provider,
        bytes32 randomNumber
    ) internal {
        // Implement your callback logic here.
    }
}
