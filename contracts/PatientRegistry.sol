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
    }

    mapping(address => Patient) public patients; // Mapping to store patient details
    address[] public patientAddresses; // Array to keep track of patient addresses

    function registerPatient(
        address _patientAddress,
        string memory _firstName,
        string memory _lastName,
        string memory _contactNumber,
        string memory _gender,
        string memory _cancerType
    ) public {
        patients[_patientAddress] = Patient(
            _firstName,
            _lastName,
            _contactNumber,
            _gender,
            _cancerType
        );
        patientAddresses.push(_patientAddress);
    }

    function getPatient(address _patientAddress)
        public
        view
        returns (
            string memory firstName,
            string memory lastName,
            string memory contactNumber,
            string memory gender,
            string memory cancerType
        )
    {
        Patient memory patient = patients[_patientAddress];
        return (
            patient.firstName,
            patient.lastName,
            patient.contactNumber,
            patient.gender,
            patient.cancerType
        );
    }

    function getPatientCount() public view returns (uint256) {
        return patientAddresses.length;
    }
}
