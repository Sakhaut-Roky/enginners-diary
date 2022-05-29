// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1UydPStWytAS2TtkWcMqA5kD1b2GzzD8",
  authDomain: "engineers-diary-1ca7b.firebaseapp.com",
  projectId: "engineers-diary-1ca7b",
  storageBucket: "engineers-diary-1ca7b.appspot.com",
  messagingSenderId: "622995626289",
  appId: "1:622995626289:web:1a2e46f8918b0cb69f3810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;