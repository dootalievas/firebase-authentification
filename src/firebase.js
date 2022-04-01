import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCDWvOUgsQaElfBMt0GZMINx-BX784j1Fc",
//   authDomain: "auth-development-ae8c6.firebaseapp.com",
//   projectId: "auth-development-ae8c6",
//   storageBucket: "auth-development-ae8c6.appspot.com",
//   messagingSenderId: "490453477908",
//   appId: "1:490453477908:web:829743542bbc5da284d501",
// };

// Initialize Firebase

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
