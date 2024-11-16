// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ISP} from "node_modules/@ethsign/sign-protocol-evm/src/interfaces/ISP.sol";
import {Attestation} from "node_modules/@ethsign/sign-protocol-evm/src/models/Attestation.sol";
import {DataLocation} from "node_modules/@ethsign/sign-protocol-evm/src/models/DataLocation.sol";

contract DataAttester is Ownable {
    ISP public spInstance;
    uint64 public schemaId;

    constructor() Ownable(_msgSender()) {}

    function setSPInstance(address instance) external onlyOwner {
        spInstance = ISP(instance);
    }

    function setSchemaID(uint64 schemaId_) external onlyOwner {
        schemaId = schemaId_;
    }

    function attest(address recipient, address user, uint256 questId, string calldata location)
        external
        onlyOwner
        returns (uint64)
    {
        bytes[] memory recipients = new bytes[](1);
        recipients[0] = abi.encode(recipient);
        Attestation memory a = Attestation({
            schemaId: schemaId,
            linkedAttestationId: 0,
            attestTimestamp: 0,
            revokeTimestamp: 0,
            attester: address(this),
            validUntil: 0,
            dataLocation: DataLocation.ONCHAIN,
            revoked: false,
            recipients: recipients,
            data: abi.encode(user, questId, location)
        });
        return spInstance.attest(a, "", "", "");
    }
}
