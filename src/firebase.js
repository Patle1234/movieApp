// Import the functions you need from the SDKs you need
import 'firebase/storage';  
import 'firebase/firestore'
import { initializeApp } from "firebase/app"
import firebase from 'firebase/app'
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBodNCdkYOyc5Hl1C2A1eGOatAvInAZHJo",
  authDomain: "movie-app-dea3e.firebaseapp.com",
  projectId: "movie-app-dea3e",
  storageBucket: "movie-app-dea3e.appspot.com",
  messagingSenderId: "653108680213",
  appId: "1:653108680213:web:bea9bff68e8591bd7be01c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}




