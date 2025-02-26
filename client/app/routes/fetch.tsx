declare global {
  interface Window {
    ethereum?: any;
  }
}

"use client";
import { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import { Button } from "~/components/ui/button";
import { Calendar, ChevronDown, Phone, Mail, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
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
import { getDatabase, ref, get, query, orderByChild, equalTo, onValue } from "firebase/database";
import { redirect, useLoaderData } from "@remix-run/react";
import { firebaseConfig } from "firebaseConfig";
import CryptoJS from 'crypto-js';
import { json, LoaderFunction } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { AbiItem } from 'web3-utils';
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
// import { database } from "./firebase"; // Ensure this import points to your Firebase configuration

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
  blockchainAddress: string;
  diagnosedDate?: string;
  transactionHash?: string;
  prediction?: {
    prediction: string;
    timestamp: number;
  };
  [key: string]: any;
}

interface HeartRateDataPoint {
  bpm: number;
  readable_date: string;
  timestamp: number;
}

export default function FetchPatientData() {
  const { firebaseConfig } = useLoaderData<any>();
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<string>("");
  const [recordId, setRecordId] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();
  const [timeRange, setTimeRange] = useState("today"); // Default to today
  const [data, setData] = useState<HeartRateDataPoint[]>([]);

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);

  const verificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadBlockchainData();
    const heartRateRef = ref(database, "heart_rate_data");

    const unsubscribe = onValue(heartRateRef, (snapshot) => {
      const rawData = snapshot.val();
      console.log("Raw data from Firebase:", rawData); // Debugging log

      if (rawData) {
        // Convert Firebase data to an array and process it
        const now = Date.now();
        const startOfDay = new Date().setHours(0, 0, 0, 0);
        const startOfYesterday = startOfDay - 24 * 60 * 60 * 1000;
        const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();
        const startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();

        const filteredData = Object.values(rawData)
          .map((entry: any) => ({
            bpm: entry.bpm,
            readable_date: entry.readable_date,
            timestamp: entry.timestamp * 1000, // Convert seconds to milliseconds
          }))
          .filter((dataPoint: HeartRateDataPoint) => {
            switch (timeRange) {
              case "today":
                return dataPoint.timestamp >= startOfDay;
              case "yesterday":
                return dataPoint.timestamp >= startOfYesterday && dataPoint.timestamp < startOfDay;
              case "month":
                return dataPoint.timestamp >= startOfMonth;
              case "year":
                return dataPoint.timestamp >= startOfYear;
              default:
                return true;
            }
          });

        console.log("Filtered Data:", filteredData); // Debugging log
        setData(filteredData);
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [timeRange]);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const networkData = (PatientRegistryABI.networks as any)[networkId.toString()];

        if (networkData) {
          const registry = new web3.eth.Contract(PatientRegistryABI.abi as AbiItem[], networkData.address);
          setPatientRegistry(registry);
        } else {
          window.alert('The smart contract is not deployed to the current network');
        }
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const fetchPatientData = async () => {
    if (!address.trim() && !name.trim()) {
      toast({
        title: "Error",
        description: "Please enter an address or name",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setError(null);
    try {
      let dbRef: any;
      if (address.trim()) {
        dbRef = ref(database, `patients/${address.trim()}`);
      } else if (name.trim()) {
        dbRef = query(ref(database, 'patients'), orderByChild('firstName'), equalTo(name));
      }

      if (!dbRef) return;

      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const patientData = snapshot.val();
        console.log("Retrieved data:", patientData);

        let currentRecordId;
        let currentPatient;

        if (address.trim()) {
          currentRecordId = address.trim();
          currentPatient = patientData;
        } else {
          // For name search, we need to get the blockchain address from the patient data
          const patientKey = Object.keys(patientData)[0];
          currentPatient = patientData[patientKey];
          // Assuming the blockchain address is stored in the patient data
          currentRecordId = currentPatient.blockchainAddress || patientKey;
        }

        // Set the state with the current values
        setPatient(currentPatient);
        setRecordId(currentRecordId);

        // Only verify on blockchain if we have a valid address
        if (patientRegistry && currentRecordId && Web3.utils.isAddress(currentRecordId)) {
          try {
            const record = await patientRegistry.methods.getPatientRecord(currentRecordId).call();
            console.log("Retrieved blockchain data:", record);
            if (record) {
              setPatient(prev => ({
                ...prev,
                diagnosedDate: new Date(record.timestamp * 1000).toLocaleString()
              } as PatientData));
            }
          } catch (blockchainError) {
            console.error("Blockchain verification error:", blockchainError);
            // Don't fail the entire operation if blockchain verification fails
            toast({
              title: "Warning",
              description: "Could not verify blockchain data",
              variant: "destructive",
            });
          }
        }

        toast({
          title: "Success",
          description: "Patient data retrieved successfully",
        });
      } else {
        setError("No patient found with the provided information");
        setPatient(null);
        toast({
          title: "Error",
          description: "No patient found with the provided information",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching patient record");
      toast({
        title: "Error",
        description: "Failed to fetch patient data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const generateHash = (data: any) => {
    const relevantData: { [key: string]: any } = {
      firstName: data.firstName,
      lastName: data.lastName,
      contactNumber: data.contactNumber,
      gender: data.gender,
      cancerType: data.cancerType,
      age: data.age,
      email: data.email,
      timestamp: data.timestamp
    };
  
    const sortedData = Object.keys(relevantData).sort().reduce((result: { [key: string]: any }, key: string) => {
      result[key] = relevantData[key];
      return result;
    }, {});
  
    return CryptoJS.SHA256(JSON.stringify(sortedData)).toString();
  };
  
  const verifyDataIntegrity = async () => {
    if (!patientRegistry || !patient) return;
  
    setVerificationResult('');
    
    try {
      setIsVerifying(true);
      
      // Scroll to the verification section
      verificationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      const record = await patientRegistry.methods.getPatientRecord(recordId).call();
      console.log("Retrieved patient record from blockchain:", record);
  
      const storedHash = record.dataHash;
      const currentHash = generateHash(patient);
  
      // Add delay for animation
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      let resultMessage = '';
      const isMatch = storedHash === currentHash;
  
      if (isMatch) {
        resultMessage += 'Data integrity verified: No alterations detected.';
      } else {
        resultMessage += 'Data integrity compromised: Alterations detected.';
        toast({
          title: "Data Integrity Compromised",
          description: "Alterations detected in the data.",
          variant: "destructive",
        });
      }
      resultMessage += `\nStored Hash in Blockchain: ${storedHash}\nComputed Hash from Database: ${currentHash}\n`;
      setVerificationResult(resultMessage);
  
    } catch (error) {
      console.error("Error verifying data integrity:", error);
      setVerificationResult('Error verifying data integrity.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6 bg-background text-foreground">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fetch Patient's Data</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="max-w-md bg-input text-foreground"
        />
        <Input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="max-w-md bg-input text-foreground"
        />
        <Button 
          onClick={fetchPatientData} 
          disabled={loading}
          className="bg-primary text-primary-foreground"
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {error && (
        <div className="bg-destructive text-destructive-foreground px-4 py-3 rounded">
          {error}
        </div>
      )}

      {patient && (
        <Card className="bg-card text-card-foreground">
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
              <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
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
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{patient.cancerType}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transaction Hash:</span>
                  <Badge variant="outline" className="bg-muted text-muted-foreground">{patient.transactionHash || 'N/A'}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Patient ID:</span>
                  <Badge variant="outline" className="bg-muted text-muted-foreground">{recordId}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {patient && recordId === "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c" && patient.prediction && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Prediction Data (X-ray)</CardTitle>
            <CardDescription>Latest prediction and timestamp</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Prediction:</span>
                <Badge variant="outline">{patient.prediction.prediction}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Timestamp:</span>
                <Badge variant="outline">{new Date(patient.prediction.timestamp).toLocaleString()}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {patient && (
        <div className="space-y-4">
          <Button 
            onClick={verifyDataIntegrity} 
            disabled={isVerifying}
            className="mt-6 bg-primary text-primary-foreground"
          >
            {isVerifying ? "Verifying..." : "Verify Data Integrity"}
          </Button>

          <div ref={verificationRef}>
            {isVerifying && (
              <div className="mt-6 relative h-40 bg-secondary/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="blockchain-animation flex items-center space-x-4">
                    {[...Array(5)].map((_, index) => (
                      <motion.div
                        key={index}
                        className="block w-12 h-12 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold"
                        initial={{ scale: 1, x: -100, opacity: 0 }}
                        animate={{
                          scale: [1, 1.2, 1],
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      >
                        {index + 1}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            )}

            {verificationResult && (
              <div className="mt-4 p-4 bg-muted text-muted-foreground border rounded space-y-2">
                <div className="flex items-center gap-2">
                  {verificationResult.includes('No alterations detected') ? (
                    <CheckCircle className="text-green-500" />
                  ) : (
                    <XCircle className="text-red-500" />
                  )}
                  <span className="font-medium">
                    {verificationResult.split('\n')[0]}
                  </span>
                </div>
                <pre className="mt-2 whitespace-pre-wrap text-sm">
                  {verificationResult.split('\n').slice(1).join('\n')}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {patient && recordId === "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c" && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Heart Rate History</CardTitle>
            <CardDescription>Patient&apos;s heart rate over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="yesterday">Yesterday</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ChartContainer
              config={{
                heartRate: {
                  label: "Heart Rate",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="readable_date"
                    tick={{ fill: "hsl(var(--foreground))" }}
                    tickLine={{ stroke: "hsl(var(--foreground))" }}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--foreground))" }}
                    tickLine={{ stroke: "hsl(var(--foreground))" }}
                    domain={[40, 120]} // Adjust Y-axis range
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="bpm"
                    stroke="#ff7300" // Set a specific color for visibility
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 text-sm text-muted-foreground">
              Normal resting heart rate for adults: 60-100 beats per minute
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}