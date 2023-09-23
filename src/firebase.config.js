// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZL2NGDwK5ZdEn5XAZXadFd2XUnX9WmlY",
  authDomain: "bazar-ecommerce-app.firebaseapp.com",
  projectId: "bazar-ecommerce-app",
  storageBucket: "bazar-ecommerce-app.appspot.com",
  messagingSenderId: "336399677062",
  appId: "1:336399677062:web:4b4c770d9b4575c5e90307"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);