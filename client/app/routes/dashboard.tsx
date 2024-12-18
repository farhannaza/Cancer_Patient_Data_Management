"use client"
import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Calendar, ChevronDown, Phone, Mail, MapPin, AlertCircle } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

// Mock fetch function to simulate API call
const fetchNewPatientData = async () => {
  return [
    {
      firstName: "Alia",
      lastName: "Kasrina",
      age: 30,
      gender: "Female",
      contactNumber: "+60 1110152931",
      email: "alia.kasrinae@example.com",
      address: "0x2494d53Db3fB476Ffc53b6876DAD2bc881f2895c",
      cancerType: "Breast",
      hash: "0xa53cb1ef2e82f5b9bf1168473b9824676bc29a6ccaac0daaff0365b312f7f1df",
      diagnosisDate: new Date(2023, 2, 10),
    },
    
  ]
}

export default function PatientDashboard() {
  const [patients, setPatients] = useState([])

  useEffect(() => {
    // Simulate fetching new patient data from the backend
    const fetchData = async () => {
      const newPatientData = await fetchNewPatientData()
      setPatients(newPatientData)
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-4 space-y-6">
      {patients.map((patient, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage alt={`${patient.firstName} ${patient.lastName}`} />
                <AvatarFallback>{patient.firstName[0]}{patient.lastName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{patient.firstName} {patient.lastName}</CardTitle>
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
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
