// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract PatientRegistry {
    address public admin;

    constructor() {
        admin = msg.sender; // The admin is the one who deploys the contract
    }

    struct Patient {
        string firstName;
        string lastName;
        string contactNumber;
        string gender;
        string cancerType;
        uint256 timestamp; // Add a timestamp to each record
    }

    mapping(address => Patient[]) public patientHistory; // Mapping to store patient history

    function registerPatient(
        address _patientAddress,
        string memory _firstName,
        string memory _lastName,
        string memory _contactNumber,
        string memory _gender,
        string memory _cancerType
    ) public {
        Patient memory newPatient = Patient(
            _firstName,
            _lastName,
            _contactNumber,
            _gender,
            _cancerType,
            block.timestamp // Record the current block timestamp
        );
        patientHistory[_patientAddress].push(newPatient); // Append the new record to the history
    }

    function getLatestPatient(address _patientAddress)
        public
        view
        returns (
            string memory firstName,
            string memory lastName,
            string memory contactNumber,
            string memory gender,
            string memory cancerType,
            uint256 timestamp
        )
    {
        require(patientHistory[_patientAddress].length > 0, "No records found for this address");
        Patient memory latestPatient = patientHistory[_patientAddress][patientHistory[_patientAddress].length - 1];
        return (
            latestPatient.firstName,
            latestPatient.lastName,
            latestPatient.contactNumber,
            latestPatient.gender,
            latestPatient.cancerType,
            latestPatient.timestamp
        );
    }

    function getPatientHistoryCount(address _patientAddress) public view returns (uint256) {
        return patientHistory[_patientAddress].length;
    }

    function getPatientByIndex(address _patientAddress, uint256 index)
        public
        view
        returns (
            string memory firstName,
            string memory lastName,
            string memory contactNumber,
            string memory gender,
            string memory cancerType,
            uint256 timestamp
        )
    {
        require(index < patientHistory[_patientAddress].length, "Index out of bounds");
        Patient memory patient = patientHistory[_patientAddress][index];
        return (
            patient.firstName,
            patient.lastName,
            patient.contactNumber,
            patient.gender,
            patient.cancerType,
            patient.timestamp
        );
    }
}
