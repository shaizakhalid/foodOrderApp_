// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU71YXZxZOhRyLXCe3uIeCeDp8zZ_fCdo",
  authDomain: "foodorderapp-3a7b8.firebaseapp.com",
  projectId: "foodorderapp-3a7b8",
  storageBucket: "foodorderapp-3a7b8.appspot.com",
  messagingSenderId: "210582422117",
  appId: "1:210582422117:web:c205792d0b341120e3bc8c",
};

// Initialize Firebase
// const FirebaseApp = initializeApp(firebaseConfig);

if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

//npm install firebase@^7.24.0
