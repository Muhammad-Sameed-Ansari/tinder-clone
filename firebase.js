import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDU-sIwwv14lJ2aKkyTV3BOFIPpgqVLCBA",
  authDomain: "tindercloneexpo.firebaseapp.com",
  projectId: "tindercloneexpo",
  storageBucket: "tindercloneexpo.appspot.com",
  messagingSenderId: "1043035196161",
  appId: "1:1043035196161:web:732a2de80154c973b82900"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }