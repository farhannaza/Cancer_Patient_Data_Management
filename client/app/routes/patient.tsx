"use client";
import { useState, useEffect } from "react";
import Web3 from "web3";
import { Button } from "~/components/ui/button";
import { Calendar, ChevronDown, Phone, Mail, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { useToast } from "~/hooks/use-toast";
import PatientRegistryABI from "./artifacts/PatientRegistry.json";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, query, orderByChild, equalTo, onValue } from "firebase/database";
import { useLoaderData } from "@remix-run/react";
import { firebaseConfig } from "firebaseConfig";
import CryptoJS from 'crypto-js';
import { json, LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import { useUser } from "@clerk/remix";
import { AbiItem } from 'web3-utils';
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

declare global {
  interface Window {
    ethereum?: any;
  }
}

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
  clerkId: string;
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
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<string>("");
  const [recordId, setRecordId] = useState<string>("");
  const { toast } = useToast();

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);
  const { isLoaded, isSignedIn, user } = useUser();
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeRange, setTimeRange] = useState("today");
  const [data, setData] = useState<HeartRateDataPoint[]>([]);

  useEffect(() => {
    loadBlockchainData();
    if (isLoaded && isSignedIn && user) {
      fetchPatientData(user.emailAddresses[0].emailAddress);
    }
    
    const heartRateRef = ref(database, "heart_rate_data");

    const unsubscribe = onValue(heartRateRef, (snapshot) => {
      const rawData = snapshot.val();
      if (rawData) {
        const now = Date.now();
        const startOfDay = new Date().setHours(0, 0, 0, 0);
        const startOfYesterday = startOfDay - 24 * 60 * 60 * 1000;
        const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();
        const startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();

        const filteredData = Object.values(rawData)
          .map((entry: any) => ({
            bpm: entry.bpm,
            readable_date: entry.readable_date,
            timestamp: entry.timestamp * 1000,
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

        setData(filteredData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isLoaded, isSignedIn, user, timeRange]);

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

  const fetchPatientData = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching data for userId:", email);
      const dbRef = query(ref(database, 'patients'), orderByChild('email'), equalTo(email));

      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const patientData = snapshot.val();
        console.log("Retrieved firebase data:", patientData);

        // Extract the first key from the data object
        const recordId = Object.keys(patientData)[0]; 
        const currentPatient = patientData[recordId];

        // Set initial patient data
        setPatient(currentPatient);
        setRecordId(recordId);

        // Fetch blockchain data if registry is available
        if (patientRegistry && recordId) {
          try {
            const record = await patientRegistry.methods.getPatientRecord(recordId).call();
            console.log("Retrieved blockchain data:", record);
            
            if (record && record.timestamp) {
              // Update patient data with diagnosed date
              setPatient(prev => ({
                ...prev!,
                diagnosedDate: new Date(record.timestamp * 1000).toLocaleString()
              }));
            }
          } catch (blockchainError) {
            console.error("Error fetching blockchain data:", blockchainError);
          }
        }

        toast({
          title: "Success",
          description: "User data retrieved successfully",
        });
      } else {
        setPatient(null);
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

  const handleRefresh = async () => {
    if (isLoaded && isSignedIn && user) {
      setLoading(true);
      await fetchPatientData(user.emailAddresses[0].emailAddress);
      toast({
        title: "Refreshed",
        description: "Patient data has been refreshed",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {user && (
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Welcome back, {user.firstName}!</h1>
          <Button
            onClick={handleRefresh}
            variant="outline"
            size="icon"
            className="rounded-full"
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            <span className="sr-only">Refresh data</span>
          </Button>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!patient && user && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.imageUrl} alt={`${user.firstName} ${user.lastName}`} />
                <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">
                  {user.firstName} {user.lastName}
                </CardTitle>
                <CardDescription>
                  Basic Profile
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>{user.phoneNumbers?.[0]?.phoneNumber || 'N/A'}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>{user.emailAddresses[0].emailAddress}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Patient ID:</span>
                  <Badge variant="outline">{user.primaryWeb3Wallet?.web3Wallet || 'N/A'}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {patient && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
              <AvatarImage src={user?.imageUrl} alt={`${user?.firstName} ${user?.lastName}`} />
              <AvatarFallback>{user?.firstName?.[0]}{user?.lastName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">
                  {patient.firstName} {patient.lastName}
                </CardTitle>
                <CardDescription>
                  {patient.age || 'N/A'} years old • {patient.gender || ''}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>{patient.contactNumber || 'N/A'}</span>
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
                  <Badge variant="secondary">{patient.cancerType || 'N/A'}</Badge>
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
      )}

      {patient && recordId === "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c" && patient.prediction && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Prediction Data  (X-ray)</CardTitle>
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
      )}

      {recordId === "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c" && (
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
                    domain={[40, 120]}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="bpm"
                    stroke="#ff7300"
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