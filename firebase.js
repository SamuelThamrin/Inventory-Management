// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPXWZzhi_3HgXyt3tEj0zuZf7IdQll314",
  authDomain: "inventory-management-d962f.firebaseapp.com",
  projectId: "inventory-management-d962f",
  storageBucket: "inventory-management-d962f.appspot.com",
  messagingSenderId: "725654287068",
  appId: "1:725654287068:web:98d205ddc872c01542ba19",
  measurementId: "G-K2V4SWVMD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };