// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract CancerPatientData {
    // Define a struct to hold patient data
    struct Patient {
        string firstName;
        string lastName;
        string contactNumber;
        string gender;
        string cancerType;
    }

    // Array to store all patients
    Patient[] public patients;

    // Event to emit when a new patient is added
    event NewPatientAdded(
        string firstName,
        string lastName,
        string contactNumber,
        string gender,
        string cancerType
    );

    // Function to add a new patient
    function addPatient(
        string memory _firstName,
        string memory _lastName,
        string memory _contactNumber,
        string memory _gender,
        string memory _cancerType
    ) public {
        // Create a new patient and add it to the array
        patients.push(Patient(_firstName, _lastName, _contactNumber, _gender, _cancerType));

        // Emit the event
        emit NewPatientAdded(_firstName, _lastName, _contactNumber, _gender, _cancerType);
    }

    // Function to get the number of patients
    function getPatientCount() public view returns (uint256) {
        return patients.length;
    }

    // Function to get patient data by index
    function getPatient(uint256 index) public view returns (string memory, string memory, string memory, string memory, string memory) {
        require(index < patients.length, "Patient index out of bounds");
        Patient memory patient = patients[index];
        return (patient.firstName, patient.lastName, patient.contactNumber, patient.gender, patient.cancerType);
    }
}
