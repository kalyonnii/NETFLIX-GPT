// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZi-wjxb1M3-f42t-lzFMguUJ5Q8J-OcQ",
  authDomain: "netflixgpt-4b613.firebaseapp.com",
  projectId: "netflixgpt-4b613",
  storageBucket: "netflixgpt-4b613.appspot.com",
  messagingSenderId: "117446801605",
  appId: "1:117446801605:web:cc6c98f4e99e3355d718ac",
  measurementId: "G-WCELC1GKV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();