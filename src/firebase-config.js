
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAq5EB9cDs8mxNbOhfojehqIyzeGI1Vr28",
  authDomain: "react-crud-52151.firebaseapp.com",
  projectId: "react-crud-52151",
  storageBucket: "react-crud-52151.appspot.com",
  messagingSenderId: "106550018245",
  appId: "1:106550018245:web:3357dff7d64a7c4ad6b0ac",
  measurementId: "G-DSVK7E0N7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);