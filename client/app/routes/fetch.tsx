import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useLoaderData } from "@remix-run/react";
import { firebaseLoader } from "firebaseConfig";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

export { firebaseLoader as loader };

interface PatientData {
  name: string;
  age: string;
  cancerType: string;
  [key: string]: any; // For any additional fields
}

interface FirebaseData {
  [key: string]: PatientData;
}

export default function FetchAllData() {
  const { firebaseConfig } = useLoaderData<typeof firebaseLoader>();
  const [allPatientData, setAllPatientData] = useState<FirebaseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const fetchAllPatientData = async () => {
    setLoading(true);
    setError(null);
    try {
      const dbRef = ref(database, 'patients');
      const snapshot = await get(dbRef);
      
      if (snapshot.exists()) {
        console.log("Retrieved all patient data:", snapshot.val());
        setAllPatientData(snapshot.val());
      } else {
        setError("No data available in the database");
        setAllPatientData(null);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching data from database");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAllPatientData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patient Records</h1>
        <Button 
          onClick={fetchAllPatientData} 
          disabled={loading}
        >
          {loading ? "Loading..." : "Refresh Data"}
        </Button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPatientData && Object.entries(allPatientData).map(([recordId, data]) => (
          <Card key={recordId} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{data.name || "Unknown Patient"}</span>
                <Badge variant="secondary">{data.cancerType}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="font-medium">Record ID:</dt>
                  <dd className="text-gray-500">{recordId}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Age:</dt>
                  <dd className="text-gray-500">{data.age}</dd>
                </div>
                {/* Display additional fields if they exist */}
                {Object.entries(data).map(([key, value]) => {
                  // Skip already displayed fields
                  if (["name", "age", "cancerType"].includes(key)) return null;
                  return (
                    <div key={key} className="flex justify-between">
                      <dt className="font-medium capitalize">{key}:</dt>
                      <dd className="text-gray-500">
                        {typeof value === 'object' ? JSON.stringify(value) : value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>

      {allPatientData && Object.keys(allPatientData).length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No patient records found</p>
        </div>
      )}
    </div>
  );
}
