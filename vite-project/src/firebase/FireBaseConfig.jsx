// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLtT965xGG5KMT_vG34rxk11a1vkzRzCY",
  authDomain: "ecommerce-app-bcfe4.firebaseapp.com",
  projectId: "ecommerce-app-bcfe4",
  storageBucket: "ecommerce-app-bcfe4.appspot.com",
  messagingSenderId: "345985635466",
  appId: "1:345985635466:web:c301c19e89abae5c5ac973",
  measurementId: "G-X17CJN48H1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { auth, fireDB };
