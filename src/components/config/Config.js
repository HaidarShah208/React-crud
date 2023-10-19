// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhxtgPfBF9LAV4OIA6qsQYqTzqgCEZhvc",
  authDomain: "first-firebase-e443f.firebaseapp.com",
  projectId: "first-firebase-e443f",
  storageBucket: "first-firebase-e443f.appspot.com",
  messagingSenderId: "975460174364",
  appId: "1:975460174364:web:3aae0ad2cd6734eba3add9",
  measurementId: "G-LCS8482F7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app)