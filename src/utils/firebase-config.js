import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9OatLdTCuqgj8OeJjwG0RM87qwiZXPj4",
  authDomain: "reactnetflix-clone.firebaseapp.com",
  projectId: "reactnetflix-clone",
  storageBucket: "reactnetflix-clone.appspot.com",
  messagingSenderId: "913787856946",
  appId: "1:913787856946:web:6962ea38f0ff45b0d8342b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
