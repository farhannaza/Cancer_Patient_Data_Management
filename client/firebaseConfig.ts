// app/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { json, LoaderFunction } from "@remix-run/node";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyABd0P58Guvh0GyY08BuWnccZPnzxHerdw",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "onchologychain-ff1d9.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASE_URL || "https://onchologychain-ff1d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: process.env.FIREBASE_PROJECT_ID || "onchologychain-ff1d9",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "onchologychain-ff1d9.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "249856462590",
  appId: process.env.FIREBASE_APP_ID || "1:249856462590:web:9ce5383e04768ac38d9faf"
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