// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB02plwGmbU5f3V2Fp6QgJIN-hVB4xuZyY",
  authDomain: "login-b6ec9.firebaseapp.com",
  projectId: "login-b6ec9",
  storageBucket: "login-b6ec9.appspot.com",
  messagingSenderId: "819144679214",
  appId: "1:819144679214:web:a24618a7e1c4a11e9ae4bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const signIn = { signInWithPopup, GoogleAuthProvider };

export const provider = new GoogleAuthProvider();

export const auth = getAuth();
