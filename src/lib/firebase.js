// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWYW0_o0iL9KcUEbaMq5KvGxHBL8KSJFs",
  authDomain: "avospace-66be4.firebaseapp.com",
  projectId: "avospace-66be4",
  storageBucket: "avospace-66be4.firebasestorage.app",
  messagingSenderId: "413322371821",
  appId: "1:413322371821:web:a91d5dce0486ce2089e2e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };