// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyASJyV4M3r2vvHJ2JBxpyo17L6IlaUpVIQ",
  authDomain: "connectingids-c6a74.firebaseapp.com",
  projectId: "connectingids-c6a74",
  storageBucket: "connectingids-c6a74.appspot.com",
  messagingSenderId: "87916783553",
  appId: "1:87916783553:web:ce435ba8e7b61a1824f140",
  measurementId: "G-97FQ9DP05R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};