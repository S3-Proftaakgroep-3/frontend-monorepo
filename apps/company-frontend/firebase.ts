// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD3Tf7VuJofPAfQoQpARQQFgJETBd49K4",
  authDomain: "mdma-bbcb4.firebaseapp.com",
  projectId: "mdma-bbcb4",
  storageBucket: "mdma-bbcb4.appspot.com",
  messagingSenderId: "865757289313",
  appId: "1:865757289313:web:e4c02a18b4453482cfc320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage
export const storage = getStorage(app);