"use client"
import { useState, useEffect } from "react"
import Web3 from "web3"
import { Button } from "~/components/ui/button"
import { Calendar, ChevronDown, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { useToast } from "~/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import PatientRegistryABI from "./artifacts/PatientRegistry.json"
import { initializeApp } from "firebase/app"
import { getDatabase, ref, get } from "firebase/database"
import { useLoaderData } from "@remix-run/react"
import { firebaseLoader } from "firebaseConfig"

export { firebaseLoader as loader }

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
  const { firebaseConfig } = useLoaderData<typeof firebaseLoader>();
  const [patients, setPatients] = useState<{ [key: string]: PatientData }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);

  useEffect(() => {
    loadBlockchainData();
    fetchAllPatients();
  }, []);

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
        window.alert('The smart contract is not deployed to the current network');
      }
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const fetchAllPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const dbRef = ref(database, 'patients');
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const patientData = snapshot.val();
        console.log("Retrieved all patient data:", patientData);

        // Fetch blockchain data for each patient
        if (patientRegistry) {
          const records = await patientRegistry.methods.getPatientRecords(account).call();
          
          Object.keys(patientData).forEach((recordId, index) => {
            const record = records[index];
            if (record) {
              patientData[recordId].diagnosedDate = new Date(record[1] * 1000).toLocaleDateString();
              patientData[recordId].transactionHash = record[0];
            }
          });
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        <Button onClick={fetchAllPatients} disabled={loading}>
          {loading ? "Refreshing..." : "Refresh Data"}
        </Button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {Object.entries(patients).map(([recordId, patient]) => (
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit Patient Info</DropdownMenuItem>
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
