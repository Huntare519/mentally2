import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
        apiKey: "AIzaSyCF1OsXCsKCQkodx3UbwS6tWSzBLpEvrMk",
        authDomain: "mentally-ee47e.firebaseapp.com",
        projectId: "mentally-ee47e",
        storageBucket: "mentally-ee47e.appspot.com",
        messagingSenderId: "907339178205",
        appId: "1:907339178205:web:31983aa93b691ccafdfb34",
        measurementId: "G-2GW1PMSV2N"
  });
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export {auth, firestore}