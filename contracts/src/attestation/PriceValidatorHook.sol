// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {ISP} from "node_modules/@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {ISPHook} from "node_modules/@ethsign/sign-protocol-evm/src/interfaces/ISPHook.sol";
import {Attestation} from "node_modules/@ethsign/sign-protocol-evm/src/models/Attestation.sol";

// @dev This contract manages attestation data validation logic.
contract PriceValidator is Ownable {
    event PriceValidator__Variables(bool, uint256);

    constructor() Ownable(_msgSender()) {}

    function _emitEvent(bool result, uint256 timestamp) internal {
        emit PriceValidator__Variables(result, timestamp);
    }
}

// @dev This contract implements the actual schema hook.
contract PriceValidatorHook is ISPHook, PriceValidator {
    error UnsupportedOperation();

    function didReceiveAttestation(
        address, // attester
        uint64, // schemaId
        uint64 attestationId,
        bytes calldata // extraData
    ) external payable {
        Attestation memory attestation = ISP(_msgSender()).getAttestation(attestationId);
        (bool result, uint256 timestamp) = abi.decode(attestation.data, (bool, uint256));
        _emitEvent(result, timestamp);
    }

    function didReceiveAttestation(
        address, // attester
        uint64, // schemaId
        uint64, // attestationId
        IERC20, // resolverFeeERC20Token
        uint256, // resolverFeeERC20Amount
        bytes calldata // extraData
    ) external pure {
        revert UnsupportedOperation();
    }

    function didReceiveRevocation(
        address, // attester
        uint64, // schemaId
        uint64, // attestationId
        bytes calldata // extraData
    ) external payable {
        revert UnsupportedOperation();
    }

    function didReceiveRevocation(
        address, // attester
        uint64, // schemaId
        uint64, // attestationId
        IERC20, // resolverFeeERC20Token
        uint256, // resolverFeeERC20Amount
        bytes calldata // extraData
    ) external pure {
        revert UnsupportedOperation();
    }
}
