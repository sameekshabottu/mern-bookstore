// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjXIYmoqbXA-vhrToinA4m2hHvAMG7SYY",
  authDomain: "mern-book-inventory-ac18f.firebaseapp.com",
  projectId: "mern-book-inventory-ac18f",
  storageBucket: "mern-book-inventory-ac18f.appspot.com",
  messagingSenderId: "931639228663",
  appId: "1:931639228663:web:e89e278c80112a85ff3bf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;