// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc4EocbfUNJIwoeUq0oRdn7MREOMAntto",
  authDomain: "portfolio-2868d.firebaseapp.com",
  projectId: "portfolio-2868d",
  storageBucket: "portfolio-2868d.firebasestorage.app",
  messagingSenderId: "402171468605",
  appId: "1:402171468605:web:c85067b9fafde958978354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);