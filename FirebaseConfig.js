// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3p4eoYtHQ2F2mtvz_ozkUyntdXXo1yrQ",
  authDomain: "farmingauth.firebaseapp.com",
  projectId: "farmingauth",
  storageBucket: "farmingauth.appspot.com",
  messagingSenderId: "999103747735",
  appId: "1:999103747735:web:a3b3581ba6073f6e6ffbd2",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);