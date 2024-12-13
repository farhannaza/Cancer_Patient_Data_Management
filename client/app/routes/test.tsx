import React, { useState } from "react";
import Web3 from "web3";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from 'crypto-js';
import PatientRegistryABI from "./artifacts/PatientRegistry.json";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";

// Add this loader function at the top of your file
export const loader: LoaderFunction = async () => {
  const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
  };
  
  return json({ firebaseConfig });
};

export default function TestIntegration() {
  const { firebaseConfig } = useLoaderData<typeof loader>();

  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cancerType, setCancerType] = useState("");
  const [blockchainData, setBlockchainData] = useState<any[]>([]);
  const [verifyRecordId, setVerifyRecordId] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  // Load Web3 and Blockchain Data
  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
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
    } else {
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const sortObjectKeys = (obj: any) => {
    return Object.keys(obj).sort().reduce((result: any, key: string) => {
      result[key] = obj[key];
      return result;
    }, {});
  };

  const generateHash = (data: any) => {
    const sortedData = sortObjectKeys(data);
    console.log("Generating hash for sorted data:", sortedData);
    return CryptoJS.SHA256(JSON.stringify(sortedData)).toString();
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

    // Store data in Firebase
    const dbRef = ref(database, `patients/${recordId}`);
    await set(dbRef, patientData);

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
      console.log("Retrieved patient data from Firebase:", snapshot.val());
      return snapshot.val();
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
