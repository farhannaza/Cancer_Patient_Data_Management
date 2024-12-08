import { useState } from "react";
import { Link } from "@remix-run/react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get, query, orderByChild, equalTo } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABd0P58Guvh0GyY08BuWnccZPnzxHerdw",
  authDomain: "onchologychain-ff1d9.firebaseapp.com",
  databaseURL: "https://onchologychain-ff1d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "onchologychain-ff1d9",
  storageBucket: "onchologychain-ff1d9.firebasestorage.app",
  messagingSenderId: "249856462590",
  appId: "1:249856462590:web:9ce5383e04768ac38d9faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Hero() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [retrievedData, setRetrievedData] = useState(null);

  // Push data to Firebase
  const handlePushData = () => {
    const data = { name, age };
    const dbRef = ref(database, "users");
    push(dbRef, data)
      .then(() => {
        alert("Data pushed successfully!");
        setName("");
        setAge("");
      })
      .catch((error) => alert("Error pushing data: " + error.message));
  };

  // Set data to a specific path
  const handleSetData = () => {
    const data = { name, age };
    const dbRef = ref(database, "users/specificUser");
    set(dbRef, data)
      .then(() => {
        alert("Data set successfully!");
        setName("");
        setAge("");
      })
      .catch((error) => alert("Error setting data: " + error.message));
  };

  // Retrieve data by name
  const handleRetrieveDataByName = () => {
    const dbRef = ref(database, "users");
    const nameQuery = query(dbRef, orderByChild("name"), equalTo(name));
    get(nameQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setRetrievedData(data);
        } else {
          alert("No data found for the specified name");
          setRetrievedData(null);
        }
      })
      .catch((error) => alert("Error retrieving data: " + error.message));
  };

  return (
    <section className="w-full min-h-screen py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none my-8">
              OnchologyChain
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pb-3">
              Cancer Patient Data Management
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded-md mb-2"
              />
              <input
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border p-2 rounded-md ml-2"
              />
            </div>
            <div className="space-x-4">
              <button
                onClick={handlePushData}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Push Data
              </button>
              <button
                onClick={handleSetData}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Set Data
              </button>
              <button
                onClick={handleRetrieveDataByName}
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50"
              >
                Retrieve Data by Name
              </button>
            </div>
          </div>
          {retrievedData && (
            <div className="mt-6">
              <h2 className="text-lg font-bold">Retrieved Data:</h2>
              <pre className="bg-gray-100 p-4 rounded-md text-left">
                {JSON.stringify(retrievedData, null, 2)}
              </pre>
            </div>
          )}
          <div className="mt-6 space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              to="#"
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              to="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
