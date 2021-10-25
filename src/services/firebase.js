import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyCBvuTsuRau9LzGEZmTcvA_MVaQkNTSEUU",
  authDomain: "chatduck-bfdb7.firebaseapp.com",
  projectId: "chatduck-bfdb7",
  storageBucket: "chatduck-bfdb7.appspot.com",
  messagingSenderId: "1091646058827",
  appId: "1:1091646058827:web:8f77ad772a6eced2bcb8ce",
  databaseURL:  "https://chatduck-bfdb7-default-rtdb.firebaseio.com/"
   
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth;
  export const db = firebase.database();