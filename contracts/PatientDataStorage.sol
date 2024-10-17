// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Ownership.sol"; // Ensure Ownership.sol is in the same directory

contract PatientDataStorage {
    struct Patient {
        string firstName;
        string lastName;
        string contactNumber;
        string cancerType;
    }

    mapping(address => Patient) public patients;

    event PatientDataStored(address indexed patientAddress, string firstName, string lastName);

    function storePatientData(
        string memory _firstName,
        string memory _lastName,
        string memory _contactNumber,
        string memory _cancerType
    ) public {
        patients[msg.sender] = Patient(
            _firstName,
            _lastName,
            _contactNumber,
            _cancerType
        );

        emit PatientDataStored(msg.sender, _firstName, _lastName);
    }

    function getPatientData(address _patientAddress) public view returns (Patient memory) {
        return patients[_patientAddress];
    }
}

