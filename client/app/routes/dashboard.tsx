"use client";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { Button } from "~/components/ui/button";
import { Calendar, ChevronDown, Phone, Mail } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { useToast } from "~/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import PatientRegistryABI from "./artifacts/PatientRegistry.json";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useLoaderData, redirect, useNavigate } from "@remix-run/react"; 
import { json, LoaderFunction } from "@remix-run/node";
import { useUser } from '@clerk/remix'; 
import { getAuth } from '@clerk/remix/ssr.server';
import { firebaseConfig } from "firebaseConfig"; 
import { AbiItem } from 'web3-utils';


export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect('/sign-in');
  }

  return json({ firebaseConfig });
};

interface PatientData {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  contactNumber: string;
  email: string;
  address: string;
  cancerType: string;
  diagnosedDate?: string;
  transactionHash?: string;
  [key: string]: any;
}

export default function PatientDashboard() {
  const { firebaseConfig } = useLoaderData<typeof loader>();
  const [patients, setPatients] = useState<{ [key: string]: PatientData }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate(); // Use Remix's useNavigate

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);
  const { isLoaded, isSignedIn, user } = useUser(); 

  useEffect(() => {
    const loadData = async () => {
      try {
        await loadBlockchainData();
        await fetchAllPatients();
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Error loading data");
        toast({
          title: "Error",
          description: "Failed to load data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
        const networkData = (PatientRegistryABI.networks as any)[networkId.toString()];

      if (networkData) {
        const registry = new web3.eth.Contract(PatientRegistryABI.abi as AbiItem[], networkData.address);
        setPatientRegistry(registry);
      } else {
        window.alert('The smart contract is not deployed to the current network');
      }
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const fetchAllPatients = async () => {
    try {
      const dbRef = ref(database, 'patients');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const patientData = snapshot.val();
        console.log("patient data: ", patientData)
        
        if (patientRegistry) {
          for (const recordId of Object.keys(patientData)) {
            console.log("recordId: ", recordId)
            const record = await patientRegistry.methods.getPatientRecord(recordId).call();
            console.log("Retrieved blockchain data for patient", recordId, ":", record);
            if (record) {
              patientData[recordId].diagnosedDate = new Date(record.timestamp * 1000).toLocaleString();
            }
          }
        }

        setPatients(patientData);
        toast({
          title: "Success",
          description: "All patient data retrieved successfully",
        });
      } else {
        setError("No patient records found in the database");
        setPatients({});
        toast({
          title: "Error",
          description: "No patient records found in the database",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching patient records");
      toast({
        title: "Error",
        description: "Failed to fetch patient records",
        variant: "destructive",
      });
    }
  };

  // Function to handle the "Edit Patient Info" click
  const handleEditClick = (patient: PatientData, recordId: string) => {
    // Construct the URL with patient data as query parameters
    const url = `/form?address=${encodeURIComponent(recordId)}&firstName=${encodeURIComponent(patient.firstName)}&lastName=${encodeURIComponent(patient.lastName)}&age=${encodeURIComponent(patient.age)}&gender=${encodeURIComponent(patient.gender)}&contactNumber=${encodeURIComponent(patient.contactNumber)}&email=${encodeURIComponent(patient.email)}&cancerType=${encodeURIComponent(patient.cancerType)}`;
    navigate(url); // Now using navigate from Remix
  };

  // Conditionally render based on Clerk authentication status
  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!isSignedIn) {
    return null; 
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Display welcome message using user.firstName from Clerk */}
      {user && (
        <h2 className="text-xl font-semibold">Welcome back, {user.firstName}!</h2>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        <Button onClick={fetchAllPatients} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh Data"}
        </Button>
      </div>

      {loading && (
        <div className="text-center">
          <p>Loading data...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!loading && Object.entries(patients).map(([recordId, patient]) => (
        <Card key={recordId}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage alt={`${patient.firstName} ${patient.lastName}`} />
                <AvatarFallback>{patient.firstName?.[0]}{patient.lastName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">
                  {patient.firstName} {patient.lastName}
                </CardTitle>
                <CardDescription>
                  {patient.age} years old • {patient.gender}
                </CardDescription>
              </div>
            </div>
            <DropdownMenu modal= {false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem 
                  onClick={() => handleEditClick(patient,recordId)} 
                >
                  Edit Patient Info 
                </DropdownMenuItem>
                <DropdownMenuItem>View Medical Records</DropdownMenuItem>
                <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Print Summary</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>{patient.contactNumber}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>{patient.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Diagnosed Date:</span>
                  <span className="text-sm">{patient.diagnosedDate || 'N/A'}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cancer Type:</span>
                  <Badge variant="secondary">{patient.cancerType}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transaction Hash:</span>
                  <Badge variant="outline">{patient.transactionHash || 'N/A'}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Patient ID:</span>
                  <Badge variant="outline">{recordId}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
