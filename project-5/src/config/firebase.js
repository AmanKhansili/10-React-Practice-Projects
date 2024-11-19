// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg7fLnClVicxUxI-T4QNsWJeukEsOPs4I",
  authDomain: "contact-41418.firebaseapp.com",
  projectId: "contact-41418",
  storageBucket: "contact-41418.firebasestorage.app",
  messagingSenderId: "720164087476",
  appId: "1:720164087476:web:10b4d76f32198abe3019e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
