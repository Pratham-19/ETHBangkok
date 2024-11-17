// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {EmailProver} from "./EmailProver.sol";

import {Proof} from "dependencies/vlayer-0.1.0-nightly-20241115-70dfc11/src/Proof.sol";
import {Verifier} from "dependencies/vlayer-0.1.0-nightly-20241115-70dfc11/src/Verifier.sol";

contract EmailDomainVerifier is Verifier {
    address public prover;

    mapping(bytes32 => address) public emailHashToAddr;

    constructor(address _prover) {
        prover = _prover;
    }

    function verify(Proof calldata, bytes32 _emailHash, address _targetWallet)
        public
        onlyVerified(prover, EmailProver.main.selector)
    {
        require(emailHashToAddr[_emailHash] == address(0), "email taken");
        emailHashToAddr[_emailHash] = _targetWallet;
    }
}
