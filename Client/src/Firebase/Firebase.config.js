// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATPwksnD_nyVmGQQjUhf4iKPqqfVXYCDQ",
  authDomain: "e-commerce-servicee.firebaseapp.com",
  projectId: "e-commerce-servicee",
  storageBucket: "e-commerce-servicee.appspot.com",
  messagingSenderId: "906288865078",
  appId: "1:906288865078:web:de2463a0cc8a61df9a5d97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;