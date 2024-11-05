import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import PatientRegistryABI from "./artifacts/PatientRegistry.json";


const App: React.FC = () => {
    const [account, setAccount] = useState<string>('');
    const [loader, setLoader] = useState<boolean>(true);
    const [patientRegistry, setPatientRegistry] = useState<any>(null);

    const [admin, setAdmin] = useState<string>('');
    const [patients, setPatients] = useState<any[]>([]);
    const [newPatient, setNewPatient] = useState({
        address: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        gender: '',
        cancerType: ''
    });

    useEffect(() => {
        loadWeb3();
        loadBlockchainData();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    };

    const loadBlockchainData = async () => {
        setLoader(true);
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const networkData = PatientRegistryABI.networks[networkId];

        if (networkData) {
            const registry = new web3.eth.Contract(PatientRegistryABI.abi, networkData.address);
            setPatientRegistry(registry);

            const adminAddress = await registry.methods.admin().call();
            setAdmin(adminAddress);

            const patientCount = await registry.methods.getPatientCount().call();
            const patientList = [];
            for (let i = 0; i < patientCount; i++) {
                const patientAddress = await registry.methods.patientAddresses(i).call();
                const patient = await registry.methods.getPatient(patientAddress).call();
                patientList.push({ address: patientAddress, ...patient });
            }
            setPatients(patientList);
            setLoader(false);
        } else {
            window.alert('The smart contract is not deployed to the current network');
        }
    };

    const registerPatient = async () => {
        const { address, firstName, lastName, contactNumber, gender, cancerType } = newPatient;
        await patientRegistry.methods.registerPatient(address, firstName, lastName, contactNumber, gender, cancerType).send({ from: account });
        setNewPatient({ address: '', firstName: '', lastName: '', contactNumber: '', gender: '', cancerType: '' });
        loadBlockchainData();
    };

    if (loader) {
        return (
            <div>
                Loading....
            </div>
        );
    }

    return (
        <div className="main-container">
            <h1 className="title">Patient Registry DApp</h1>

            <div className="main-content">
                <div className="account">
                    <b>Current Account:</b> {account}
                    <b>Admin: </b> {admin}
                </div>

                <h2>Patients</h2>
                <ul>
                    {patients.map((patient, index) => (
                        <li key={index}>
                            {patient.firstName} {patient.lastName} - {patient.cancerType}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-process">
                <div className="reg-patient">
                    <h3>Register Patient</h3>
                    <input
                        type="text"
                        value={newPatient.address}
                        onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                        placeholder="Patient Address"
                    />
                    <input
                        type="text"
                        value={newPatient.firstName}
                        onChange={(e) => setNewPatient({ ...newPatient, firstName: e.target.value })}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        value={newPatient.lastName}
                        onChange={(e) => setNewPatient({ ...newPatient, lastName: e.target.value })}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        value={newPatient.contactNumber}
                        onChange={(e) => setNewPatient({ ...newPatient, contactNumber: e.target.value })}
                        placeholder="Contact Number"
                    />
                    <input
                        type="text"
                        value={newPatient.gender}
                        onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
                        placeholder="Gender"
                    />
                    <input
                        type="text"
                        value={newPatient.cancerType}
                        onChange={(e) => setNewPatient({ ...newPatient, cancerType: e.target.value })}
                        placeholder="Cancer Type"
                    />
                    <button className="button" onClick={registerPatient}>
                        Register Patient
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
