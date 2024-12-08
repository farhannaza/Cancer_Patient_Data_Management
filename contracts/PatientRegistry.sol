// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PatientRegistry {
    address public admin;

    struct PatientRecord {
        string recordId; // Store only the record ID
        uint256 timestamp;
    }

    mapping(address => PatientRecord[]) private patientRecords;
    mapping(address => mapping(string => string)) private dataHashes; // Mapping to store data hashes

    constructor() {
        admin = msg.sender;
    }

    function registerPatient(
        address patientAddress,
        string memory recordId,
        string memory dataHash
    ) public {
        PatientRecord memory newRecord = PatientRecord({
            recordId: recordId,
            timestamp: block.timestamp
        });

        patientRecords[patientAddress].push(newRecord);
        dataHashes[patientAddress][recordId] = dataHash; // Store the hash
    }

    function getPatientRecords(address patientAddress) public view returns (PatientRecord[] memory) {
        return patientRecords[patientAddress];
    }

    function getDataHash(address patientAddress, string memory recordId) public view returns (string memory) {
        return dataHashes[patientAddress][recordId]; // Retrieve the hash
    }
}