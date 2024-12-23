
"use client"
import { useState } from "react"
import { format } from "date-fns"
import { Calendar, ChevronDown, Phone, Mail, MapPin, Search } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { Input } from "~/components/ui/input"
import { useToast } from "~/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { toast } from "~/hooks/use-toast";

// Mock fetch function to simulate API call
const fetchPatientDataByAddress = async (address) => {
  // Replace this with actual API call
  if (address === "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c") {
    return {
      firstName: "Alia",
      lastName: "Kasrina",
      age: 39,
      gender: "Female",
      contactNumber: "+60 1110152931",
      email: "alia.kasrinae@example.com",
      address: "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c",
      cancerType: "Breast",
      hash: "0xa53cb1ef2e82f5b9bf1168473b9824676bc29a6ccaac0daaff0365b312f7f1df",
      diagnosisDate: new Date(2023, 2, 10),
    };
  } else {
    throw new Error("Patient not found");
  }
};

export default function PatientDashboard() {
  const [patientAddress, setPatientAddress] = useState("");
  const [patient, setPatient] = useState(null);

  const handleFetchPatientData = async () => {
    try {
      const data = await fetchPatientDataByAddress(patientAddress);
      setPatient(data);
      toast({
        title: "Patient data retrieved",
        description: "Patient data has been successfully retrieved.",
      });
    } catch (error) {
      console.error("Error fetching patient data:", error);
      toast({
        title: "Error",
        description: `There was an error retrieving the patient data: ${error.message}`,
      });
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
  [key: string]: any;
}

export default function PatientDashboard() {
  const { firebaseConfig } = useLoaderData<typeof firebaseLoader>();
  const [recordId, setRecordId] = useState<string>("");
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const fetchPatientData = async () => {
    if (!recordId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a record ID",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const dbRef = ref(database, `patients/${recordId}`);
      const snapshot = await get(dbRef);
      
      if (snapshot.exists()) {
        console.log("Retrieved patient data:", snapshot.val());
        setPatient(snapshot.val());
        toast({
          title: "Success",
          description: "Patient data retrieved successfully",
        });
      } else {
        setError("No patient found with this record ID");
        setPatient(null);
        toast({
          title: "Error",
          description: "No patient found with this record ID",
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

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="mb-4">
        <Input
          placeholder="Enter Patient Address"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
        />
        <Button onClick={handleFetchPatientData} className="mt-2">Fetch Patient Data</Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
      </div>

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Enter Record ID"
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
          className="max-w-md"
        />
        <Button 
          onClick={fetchPatientData} 
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {patient && (
        <Card>
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
                  <span className="text-sm font-medium">Diagnosis Date:</span>
                  <span className="text-sm">{format(patient.diagnosisDate, "MMM d, yyyy")}</span>
                  <span className="text-sm">{patient.address}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cancer Type:</span>
                  <Badge variant="secondary">{patient.cancerType}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Transaction Hash:</span>
                  <Badge variant="outline">{patient.hash}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Editor Address:</span>
                  <Badge variant="outline">{patient.address}</Badge>
                  <span className="text-sm font-medium">Patient ID:</span>
                  <Badge variant="outline">{recordId}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
