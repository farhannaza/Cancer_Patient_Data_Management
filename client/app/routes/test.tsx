import React, { useState } from "react";
import Web3 from "web3";
import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import CryptoJS from 'crypto-js';
import PatientRegistryABI from "./artifacts/PatientRegistry.json";
import dotenv from 'dotenv';
dotenv.config();

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABd0P58Guvh0GyY08BuWnccZPnzxHerdw",
  authDomain: "onchologychain-ff1d9.firebaseapp.com",
  databaseURL: "https://onchologychain-ff1d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onchologychain-ff1d9",
  storageBucket: "onchologychain-ff1d9.firebasestorage.app",
  messagingSenderId: "249856462590",
  appId: "1:249856462590:web:9ce5383e04768ac38d9faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const secretKey = process.env.SECRET_KEY || 'default-secret-key'; // Fallback to a default key if not set

export default function TestIntegration() {
  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cancerType, setCancerType] = useState("");
  const [blockchainData, setBlockchainData] = useState<any[]>([]);
  const [verifyRecordId, setVerifyRecordId] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  // Load Web3 and Blockchain Data
  const loadBlockchainData = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const networkData = PatientRegistryABI.networks[networkId];

        if (networkData) {
          const registry = new web3.eth.Contract(PatientRegistryABI.abi, networkData.address);
          setPatientRegistry(registry);
        } else {
          alert('The smart contract is not deployed to the current network');
        }
      } catch (error) {
        console.error("Failed to connect to Ethereum provider:", error);
        alert('Failed to connect to Ethereum provider. Please check MetaMask.');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const standardizeData = (data: any) => {
    // Convert all values to strings and sort keys
    const sortedKeys = Object.keys(data).sort();
    const standardizedData: any = {};
    sortedKeys.forEach(key => {
      standardizedData[key] = String(data[key]);
    });
    return standardizedData;
  };

  const generateHash = (data: any) => {
    const standardizedData = standardizeData(data);
    console.log("Generating hash for standardized data:", standardizedData);
    return CryptoJS.SHA256(JSON.stringify(standardizedData)).toString();
  };

  const encryptData = (data: any, key: string) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    return ciphertext;
  };

  const decryptData = (ciphertext: string, key: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  };

  const registerPatient = async () => {
    if (!patientRegistry) {
      console.error("Contract is not initialized");
      return;
    }

    const recordId = uuidv4(); // Generate unique identifier
    const patientData = { name, age, cancerType };
    console.log("Registering patient data:", patientData);
    console.log("Data before hash from blockchain:", patientData);
    const dataHash = generateHash(patientData); // Generate hash

    // Encrypt data before storing in Firebase
    const encryptedData = encryptData(patientData, secretKey);

    // Store encrypted data in Firebase
    const dbRef = ref(database, `patients/${recordId}`);
    await set(dbRef, encryptedData);

    // Register patient on blockchain with hash
    try {
      await patientRegistry.methods.registerPatient(
        account,
        recordId,
        dataHash
      ).send({ from: account });

      alert("Patient registered successfully with record ID");
    } catch (error) {
      console.error("Error registering patient:", error);
    }
  };

  const fetchBlockchainData = async () => {
    if (!patientRegistry) return;

    try {
      const records = await patientRegistry.methods.getPatientRecords(account).call();
      setBlockchainData(records);
    } catch (error) {
      console.error("Error fetching blockchain data:", error);
    }
  };

  const getPatientDataFromFirebase = async (recordId: string) => {
    const dbRef = ref(database, `patients/${recordId}`);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.log("Retrieved encrypted patient data from Firebase:", snapshot.val());
      const decryptedData = decryptData(snapshot.val(), secretKey);
      console.log("Decrypted patient data:", decryptedData);
      return decryptedData;
    } else {
      console.error("No data available for this Record ID");
      return null;
    }
  };

  const verifyDataIntegrity = async (recordId: string) => {
    if (!patientRegistry) return;

    const storedData = await getPatientDataFromFirebase(recordId);
    if (!storedData) {
      setVerificationResult('No data available for this Record ID');
      return;
    }

    const storedHash = await patientRegistry.methods.getDataHash(account, recordId).call();
    console.log("Stored hash from blockchain:", storedHash);
    const currentHash = generateHash(storedData);
    console.log("Computed hash from Firebase data:", currentHash);

    setVerificationResult(`Stored Hash: ${storedHash}\nComputed Hash: ${currentHash}`);

    if (storedHash === currentHash) {
      setVerificationResult(prev => prev + '\nData integrity verified: No alterations detected.');
    } else {
      setVerificationResult(prev => prev + '\nData integrity compromised: Alterations detected.');
    }
  };

  return (
    <div>
      <button onClick={loadBlockchainData}>Connect to Blockchain</button>
      <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" placeholder="Cancer Type" value={cancerType} onChange={(e) => setCancerType(e.target.value)} />
        <button onClick={registerPatient}>Register Patient</button>
      </div>
      <button onClick={fetchBlockchainData}>Fetch Blockchain Data</button>
      <div>
        <h3>Blockchain Data:</h3>
        <ul>
          {blockchainData.map((record, index) => (
            <li key={index}>{`Record ID: ${record.recordId}, Timestamp: ${record.timestamp}`}</li>
          ))}
        </ul>
      </div>
      <div>
        <input type="text" placeholder="Enter Record ID to Verify" value={verifyRecordId} onChange={(e) => setVerifyRecordId(e.target.value)} />
        <button onClick={() => verifyDataIntegrity(verifyRecordId)}>Verify Data Integrity</button>
        <pre>{verificationResult}</pre>
      </div>
    </div>
  );
}
