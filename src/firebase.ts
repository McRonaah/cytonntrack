// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFCXAFc3MoEGNIqgMwo4BvAEQ4eg7pKQI",
  authDomain: "cytonntrack.firebaseapp.com",
  projectId: "cytonntrack",
  storageBucket: "cytonntrack.firebasestorage.app",
  messagingSenderId: "904822277652",
  appId: "1:904822277652:web:3a07ca06b10fb59c85c901",
  measurementId: "G-4X1D8ZY6GL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



