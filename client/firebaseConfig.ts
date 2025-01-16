// app/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { json, LoaderFunction } from "@remix-run/node";

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
let app;
let database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export const firebaseLoader: LoaderFunction = async () => {
  return json({ firebaseConfig });
};

export { app, database, firebaseConfig };