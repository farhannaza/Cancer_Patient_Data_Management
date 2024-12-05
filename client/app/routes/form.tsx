"use client";

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, z } from "./formCustom/zodt";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { toast } from "~/hooks/use-toast";
import PatientRegistryABI from "./artifacts/PatientRegistry.json";

export default function NewPatientForm() {
  const [account, setAccount] = useState<string>('');
  const [patientRegistry, setPatientRegistry] = useState<any>(null);
  const [patientHistory, setPatientHistory] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      firstName: "",
      lastName: "",
      contactNumber: "",
      gender: "",
      cancerType: "",
    },
  });

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  };

  const loadBlockchainData = async () => {
    const web3 = new Web3(window.ethereum);
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
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!patientRegistry) {
      console.error("Contract is not initialized");
      return;
    }

    try {
      await patientRegistry.methods.registerPatient(
        values.address,
        values.firstName,
        values.lastName,
        values.contactNumber,
        values.gender,
        values.cancerType
      ).send({ from: account });

      toast({
        title: "New patient data submitted",
        description: "The form was submitted successfully.",
      });

      fetchPatientHistory(values.address);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: `There was an error submitting the form: ${error.message}`,
      });
    }
  };

  const fetchPatientHistory = async (patientAddress: string) => {
    if (!patientRegistry) return;

    try {
      const count = await patientRegistry.methods.getPatientHistoryCount(patientAddress).call();
      const history = [];
      for (let i = 0; i < count; i++) {
        const patient = await patientRegistry.methods.getPatientByIndex(patientAddress, i).call();
        history.push(patient);
      }
      setPatientHistory(history);
    } catch (error) {
      console.error("Error fetching patient history:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">New Cancer Patient Registration</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
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
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Patient History</h2>
        {patientHistory.length > 0 ? (
          <ul>
            {patientHistory.map((patient, index) => (
              <li key={index}>
                <p>First Name: {patient.firstName}</p>
                <p>Last Name: {patient.lastName}</p>
                <p>Contact Number: {patient.contactNumber}</p>
                <p>Gender: {patient.gender}</p>
                <p>Cancer Type: {patient.cancerType}</p>
                <p>Timestamp: {new Date(patient.timestamp * 1000).toLocaleString()}</p>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No history available for this patient.</p>
        )}
      </div>
    </div>
  );
}
