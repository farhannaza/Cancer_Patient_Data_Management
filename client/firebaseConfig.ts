// app/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { json, LoaderFunction } from "@remix-run/node";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase only if all required config values are present
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Add validation for the loader
export const firebaseLoader: LoaderFunction = async () => {
  if (!process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL) {
    throw new Error("Firebase Database URL is not configured");
  }
  return json({ firebaseConfig });
};

export { app, database, firebaseConfig };