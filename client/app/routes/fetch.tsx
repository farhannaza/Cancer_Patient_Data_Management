"use client";

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import PatientRegistryABI from "./artifacts/PatientRegistry.json";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { toast } from "~/hooks/use-toast";

export default function RetrievePatientData() {
  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);
  const [patientAddress, setPatientAddress] = useState<string>('');
  const [patientData, setPatientData] = useState<any>(null);
  const [patientHistory, setPatientHistory] = useState<any[]>([]);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = PatientRegistryABI.networks[networkId];

    if (networkData) {
      const registry = new web3.eth.Contract(PatientRegistryABI.abi, networkData.address);
      setPatientRegistry(registry);
    } else {
      window.alert('The smart contract is not deployed to the current network');
    }
  };

  const fetchPatientData = async () => {
    if (!patientRegistry) {
      console.error("Contract is not initialized");
      return;
    }

    try {
      const data = await patientRegistry.methods.getLatestPatient(patientAddress).call();
      setPatientData(data);

      const count = await patientRegistry.methods.getPatientHistoryCount(patientAddress).call();
      const history = [];
      for (let i = 0; i < count; i++) {
        const patient = await patientRegistry.methods.getPatientByIndex(patientAddress, i).call();
        history.push(patient);
      }
      setPatientHistory(history);

      toast({
        title: "Patient data retrieved",
        description: "Patient data has been successfully retrieved.",
      });
    } catch (error) {
      console.error("Error retrieving patient data:", error);
      toast({
        title: "Error",
        description: `There was an error retrieving the patient data: ${error.message}`,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Retrieve Patient Data</h1>
      <div className="mb-4">
        <Input
          placeholder="Enter Patient Address"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
        />
        <Button onClick={fetchPatientData} className="mt-2">Retrieve Data</Button>
      </div>

      {patientData && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Patient Details</h2>
          <p>First Name: {patientData.firstName}</p>
          <p>Last Name: {patientData.lastName}</p>
          <p>Contact Number: {patientData.contactNumber}</p>
          <p>Gender: {patientData.gender}</p>
          <p>Cancer Type: {patientData.cancerType}</p>
          <p>Timestamp: {new Date(patientData.timestamp * 1000).toLocaleString()}</p>
        </div>
      )}

      {patientHistory.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Patient History</h2>
          <ul>
            {patientHistory.map((patient, index) => (
              <li key={index}>
                <p>First Name: {patient.firstName}</p>
                <p>Last Name: {patient.lastName}</p>
                <p>Contact Number: {patient.contactNumber}</p>
                <p>Gender: {patient.gender}</p>
                <p>Cancer Type: {patient.cancerType}</p>
                <p>Timestamp: {new Date(patient.timestamp * 1000).toLocaleString()}</p>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
