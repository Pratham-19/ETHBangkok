// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Strings} from "@openzeppelin-contracts-5.0.1/utils/Strings.sol";
import {Prover} from "dependencies/vlayer-0.1.0-nightly-20241115-70dfc11/src/Prover.sol";
import {
    VerifiedEmail,
    UnverifiedEmail,
    EmailProofLib
} from "dependencies/vlayer-0.1.0-nightly-20241115-70dfc11/src/EmailProof.sol";
import {RegexLib} from "dependencies/vlayer-0.1.0-nightly-20241115-70dfc11/src/Regex.sol";
import {Proof} from "dependencies/vlayer-0.1.0-nightly-20241115-70dfc11/src/Proof.sol";

contract EmailProver is Prover {
    using Strings for string;
    using RegexLib for string;
    using EmailProofLib for UnverifiedEmail;

    function main(UnverifiedEmail calldata unverifiedEmail, address targetWallet)
        public
        view
        returns (Proof memory, bytes32, address)
    {
        VerifiedEmail memory email = unverifiedEmail.verify();

        require(email.from.matches("^.*@gmail.com$"), "incorrect sender domain");

        return (proof(), sha256(abi.encodePacked(email.from)), targetWallet);
    }
}
