import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlSk5yUEmsfIN_LW6SZle6uZwJDVIxzyE",
  authDomain: "react-ecommerce-f5bb7.firebaseapp.com",
  projectId: "react-ecommerce-f5bb7",
  storageBucket: "react-ecommerce-f5bb7.firebasestorage.app",
  messagingSenderId: "583273192041",
  appId: "1:583273192041:web:bce3a47fe1397205f820f8"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
console.log(db);