"use client"

import React, { useState, useEffect } from "react"
import Web3 from "web3"
import CancerPatientDataABI from "./artifacts/CancerPatientData.json"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema, z } from "./formcomp/zodt"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { toast } from "C:/blockchain/Ethereum/Cancer_Patient_Data_Management/remix-intro-yt-base-1/app/hooks/use-toast"

const NewPatientForm: React.FC = () => {
  const [account, setAccount] = useState<string>("")
  const [contract, setContract] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    loadWeb3()
    loadBlockchainData()
  }, [])

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      try {
        await window.ethereum.enable()
      } catch (error) {
        alert("User denied account access.")
      }
    } else {
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!")
    }
  }

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts()
    if (accounts.length === 0) {
      alert("No accounts found. Please ensure your wallet is connected.")
      return
    }
    setAccount(accounts[0])

    const networkId = await web3.eth.net.getId()
    const networkData = CancerPatientDataABI.networks[networkId]

    if (networkData) {
      const contractInstance = new web3.eth.Contract(
        CancerPatientDataABI.abi,
        networkData.address
      )
      setContract(contractInstance)
    } else {
      alert("The smart contract is not deployed to the current network")
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      gender: "",
      cancerType: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!contract) {
      console.error("Contract is not initialized")
      return
    }

    setLoading(true)
    try {
      await contract.methods.addPatient(
        values.firstName,
        values.lastName,
        values.contactNumber,
        values.gender,
        values.cancerType
      ).send({ from: account })

      toast({
        title: "New patient data submitted",
        description: "The form was submitted successfully.",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: 'There was an error submitting the form: ${error.message}',
      })
    }
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">New Cancer Patient Registration</h1>
      {loading && <div className="loading">Loading...</div>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact number</FormLabel>
                  <FormControl>
                    <Input placeholder="011-12345678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="cancerType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cancer Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cancer type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="breast">Breast Cancer</SelectItem>
                    <SelectItem value="lung">Lung Cancer</SelectItem>
                    <SelectItem value="prostate">Prostate Cancer</SelectItem>
                    <SelectItem value="colorectal">Colorectal Cancer</SelectItem>
                    <SelectItem value="melanoma">Melanoma</SelectItem>
                    <SelectItem value="leukemia">Leukemia</SelectItem>
                    <SelectItem value="lymphoma">Lymphoma</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default NewPatientForm
