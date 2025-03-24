// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAehw9HN29hOGbeW5wOQkv2YPr9nAGXI5M",
  // authDomain: "payrollmanagement-8c05c.firebaseapp.com",
  // projectId: "payrollmanagement-8c05c",
  // storageBucket: "payrollmanagement-8c05c.firebasestorage.app",
  // messagingSenderId: "28811841387",
  // appId: "1:28811841387:web:3067cfd2c58f5cf207062e"
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth


// VITE_image_Hosting_key= 2ec9c4a82f4916e0abea2bcf8b18cf18
// apiKey= AIzaSyAehw9HN29hOGbeW5wOQkv2YPr9nAGXI5M
// authDomain= payrollmanagement-8c05c.firebaseapp.com
// projectId= payrollmanagement-8c05c
// storageBucket= payrollmanagement-8c05c.firebasestorage.app
// messagingSenderId= 28811841387
// appId= 1:28811841387:web:3067cfd2c58f5cf207062e