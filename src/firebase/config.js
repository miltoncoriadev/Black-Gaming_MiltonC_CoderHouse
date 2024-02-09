// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1BV5GtfOS8VLgO1b_uNKY0Of_jwS4EMg",
  authDomain: "black-gaming-d5d92.firebaseapp.com",
  projectId: "black-gaming-d5d92",
  storageBucket: "black-gaming-d5d92.appspot.com",
  messagingSenderId: "470294375739",
  appId: "1:470294375739:web:24e74389938c5314091b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);