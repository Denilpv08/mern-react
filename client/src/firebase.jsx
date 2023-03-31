// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_efVwUtp7l0TcMmKF9Zq6offKqvPTxS0",
  authDomain: "login-a69ed.firebaseapp.com",
  projectId: "login-a69ed",
  storageBucket: "login-a69ed.appspot.com",
  messagingSenderId: "188334364341",
  appId: "1:188334364341:web:6604cafd1d24493f0690fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };