// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PatientRegistry {
    address public admin;

    struct PatientRecord {
        string ipfsHash; // Store only the IPFS hash
        uint256 timestamp;
    }

    mapping(address => PatientRecord[]) private patientRecords;

    constructor() {
        admin = msg.sender;
    }

    function registerPatient(
        address patientAddress,
        string memory ipfsHash
    ) public {
        PatientRecord memory newRecord = PatientRecord({
            ipfsHash: ipfsHash,
            timestamp: block.timestamp
        });

        patientRecords[patientAddress].push(newRecord);
    }

    function getPatientRecords(address patientAddress) public view returns (PatientRecord[] memory) {
        return patientRecords[patientAddress];
    }
}
