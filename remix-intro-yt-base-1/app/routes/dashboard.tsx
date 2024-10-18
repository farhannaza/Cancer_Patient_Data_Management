"use client"

import { useState, useEffect } from "react"
import Web3 from "web3"
import CancerPatientDataABI from "./artifacts/CancerPatientData.json"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

export default function PatientDashboard() {
  const [patients, setPatients] = useState<any[]>([])
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [contract, setContract] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum)
      setWeb3(web3Instance)
      const contractInstance = new web3Instance.eth.Contract(
        CancerPatientDataABI.abi,
        '0xdFfcA983d2293675714deaC2B55cc80F5b9846fb' // Replace with your contract's deployed address
      )
      setContract(contractInstance)
      fetchPatientData(contractInstance)
    } else {
      console.error("Ethereum wallet is not available")
    }
  }, [])

  const fetchPatientData = async (contractInstance: any) => {
    try {
      const patientCount = await contractInstance.methods.getPatientCount().call()
      const patientDataArray = []
      for (let i = 0; i < patientCount; i++) {
        const data = await contractInstance.methods.getPatient(i).call()
        patientDataArray.push({
          firstName: data[0],
          lastName: data[1],
          contactNumber: data[2],
          gender: data[3],
          cancerType: data[4],
        })
      }
      setPatients(patientDataArray)
    } catch (err) {
      console.error("Error fetching patient data:", err)
    }
  }

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
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span>Contact Number: {patient.contactNumber}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>Gender: {patient.gender}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span>Cancer Type: {patient.cancerType}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
