// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-5d09f.firebaseapp.com",
  projectId: "real-estate-mern-5d09f",
  storageBucket: "real-estate-mern-5d09f.appspot.com",
  messagingSenderId: "106869887327",
  appId: "1:106869887327:web:0493a6ba3415ec2a0926ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);