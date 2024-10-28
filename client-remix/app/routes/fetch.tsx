import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import CancerPatientDataABI from './artifacts/CancerPatientData.json';

const PatientData: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<any>(null);
  const [account, setAccount] = useState<string>('');
  const [patientIndex, setPatientIndex] = useState<number>(0);
  const [patientData, setPatientData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (error) {
        alert('User denied account access.');
      }
    } else {
      alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      alert('No accounts found. Please ensure your wallet is connected.');
      return;
    }
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = CancerPatientDataABI.networks[networkId];

    if (networkData) {
      const contractInstance = new web3.eth.Contract(
        CancerPatientDataABI.abi,
        networkData.address
      );
      setContract(contractInstance);
    } else {
      alert('The smart contract is not deployed to the current network');
    }
  };

  const fetchPatientData = async () => {
    if (!contract) {
      setError('Contract is not initialized');
      return;
    }

    try {
      const data = await contract.methods.getPatient(patientIndex).call();
      setPatientData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching patient data:', err);
      setError('Error fetching patient data');
    }
  };

  return (
    <div className="patient-data">
      <h1>Fetch Patient Data</h1>
      <input
        type="number"
        value={patientIndex}
        onChange={(e) => setPatientIndex(Number(e.target.value))}
        placeholder="Enter patient index"
      />
      <button onClick={fetchPatientData}>Fetch Patient</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {patientData && (
        <div>
          <h2>Patient Details</h2>
          <p>First Name: {patientData[0]}</p>
          <p>Last Name: {patientData[1]}</p>
          <p>Contact Number: {patientData[2]}</p>
          <p>Gender: {patientData[3]}</p>
          <p>Cancer Type: {patientData[4]}</p>
        </div>
      )}
    </div>
  );
};

export default PatientData;
