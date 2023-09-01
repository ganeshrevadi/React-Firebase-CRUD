// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAq5EB9cDs8mxNbOhfojehqIyzeGI1Vr28",
//   authDomain: "react-crud-52151.firebaseapp.com",
//   projectId: "react-crud-52151",
//   storageBucket: "react-crud-52151.appspot.com",
//   messagingSenderId: "106550018245",
//   appId: "1:106550018245:web:3357dff7d64a7c4ad6b0ac",
//   measurementId: "G-DSVK7E0N7N",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCdT626aE7ko9LQrT4Kwbfs5m3lagpW5oQ",
  authDomain: "react-2-48acb.firebaseapp.com",
  projectId: "react-2-48acb",
  storageBucket: "react-2-48acb.appspot.com",
  messagingSenderId: "687245199042",
  appId: "1:687245199042:web:813acdb3fff68e896d1d5b",
  measurementId: "G-4S46NMTFJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
