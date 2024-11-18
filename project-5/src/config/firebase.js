// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE5RTx2aFzFAZUUAKq1k5FvgwcTNS7qdw",
  authDomain: "project-5-b0b78.firebaseapp.com",
  projectId: "project-5-b0b78",
  storageBucket: "project-5-b0b78.firebasestorage.app",
  messagingSenderId: "181866452227",
  appId: "1:181866452227:web:11f407854921e736f9c536",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
