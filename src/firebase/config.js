// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACix_l3OQB6kp3UgSwji3JD-aTW6o_M6Y",
  authDomain: "iscana-fc8ad.firebaseapp.com",
  projectId: "iscana-fc8ad",
  storageBucket: "iscana-fc8ad.appspot.com",
  messagingSenderId: "653000529194",
  appId: "1:653000529194:web:50b37e8c5e180b6021ba53"
};

// Initialize Firebase

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

 export {auth}