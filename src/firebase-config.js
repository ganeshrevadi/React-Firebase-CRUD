import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqP0qGfRM5swLeVAfZpUp9se5fQlItyQs",
  authDomain: "crud01-26d66.firebaseapp.com",
  projectId: "crud01-26d66",
  storageBucket: "crud01-26d66.appspot.com",
  messagingSenderId: "103851206434",
  appId: "1:103851206434:web:fdbf839c71def7d845277b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
