// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMTbTZPKfP0Z0vkwgD-PKfVb3-LPF_OeM",
  authDomain: "study-buddy-3cc71.firebaseapp.com",
  projectId: "study-buddy-3cc71",
  storageBucket: "study-buddy-3cc71.appspot.com",
  messagingSenderId: "810009641189",
  appId: "1:810009641189:web:94d110b5c113c0b25d940c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)