// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiBXy7FNYwjo6noIloQCrG2vTLLKVg_M0",
  authDomain: "farmingauth-77443.firebaseapp.com",
  databaseURL: "https://farmingauth-77443-default-rtdb.firebaseio.com",
  projectId: "farmingauth-77443",
  storageBucket: "farmingauth-77443.appspot.com",
  messagingSenderId: "1045488013150",
  appId: "1:1045488013150:web:769bff5254837a325e49cf",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
const db = getDatabase();
export { db, ref, onValue };
