// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC6jDOibAz0QHbOZBmiIEWn-a7nG2f4do",
  authDomain: "simple-firebase-auth-df5ed.firebaseapp.com",
  projectId: "simple-firebase-auth-df5ed",
  storageBucket: "simple-firebase-auth-df5ed.firebasestorage.app",
  messagingSenderId: "741494354823",
  appId: "1:741494354823:web:7ae753b761aa92e5391922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);