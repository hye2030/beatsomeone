// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4geXX3UCwwVGKDbG0iFZY1yuiswt3ZNc",
  authDomain: "beatsomeonenew.firebaseapp.com",
  projectId: "beatsomeonenew",
  storageBucket: "beatsomeonenew.appspot.com",
  messagingSenderId: "104225933029",
  appId: "1:104225933029:web:6b198b1cbf85aeb75ff60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);