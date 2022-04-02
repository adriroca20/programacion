// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTG9ZDprSVA7euWOG1trQFPKYKou1Armo",
  authDomain: "todo-list-b5681.firebaseapp.com",
  projectId: "todo-list-b5681",
  storageBucket: "todo-list-b5681.appspot.com",
  messagingSenderId: "386055002259",
  appId: "1:386055002259:web:f90eb501b4bdc6975f1566",
  measurementId: "G-JHP9BNCXY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);