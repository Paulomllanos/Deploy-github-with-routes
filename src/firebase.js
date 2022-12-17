// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6cYZnnecgEJhtLrD0c3LrbpG88OuD3O0",
  authDomain: "restaurantudd.firebaseapp.com",
  projectId: "restaurantudd",
  storageBucket: "restaurantudd.appspot.com",
  messagingSenderId: "1021815149591",
  appId: "1:1021815149591:web:d2a504b7066b499ed7b852"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
