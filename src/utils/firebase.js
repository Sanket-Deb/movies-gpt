// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAseAmEj6sl1CIheFP7sEnWu2F4xaUU2S4",
  authDomain: "moviesgpt-b2e49.firebaseapp.com",
  projectId: "moviesgpt-b2e49",
  storageBucket: "moviesgpt-b2e49.firebasestorage.app",
  messagingSenderId: "435354735908",
  appId: "1:435354735908:web:1180e0bc60a624ffce0fb1",
  measurementId: "G-0CKWQWGTQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
