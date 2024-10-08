/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjXHuaOhkLmj2E2-sPg5De1mv1fLaASyU',
  authDomain: 'netflix-react-clone-8f6da.firebaseapp.com',
  projectId: 'netflix-react-clone-8f6da',
  storageBucket: 'netflix-react-clone-8f6da.appspot.com',
  messagingSenderId: '222617092694',
  appId: '1:222617092694:web:a24b585a60c9591a2971f7'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);