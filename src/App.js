import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import Content from "./pages/Content";
import Homepage from "./pages/Homepage";
import MyAccount from "./pages/MyAccount";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebaseStuff";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF1OsXCsKCQkodx3UbwS6tWSzBLpEvrMk",
  authDomain: "mentally-ee47e.firebaseapp.com",
  projectId: "mentally-ee47e",
  storageBucket: "mentally-ee47e.appspot.com",
  messagingSenderId: "907339178205",
  appId: "1:907339178205:web:31983aa93b691ccafdfb34",
  measurementId: "G-2GW1PMSV2N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="">
      <Router>
        <Route path="/" exact render={() => <Homepage />} />
        <Route path="/login" render={() => <Content user={user} />} />
        <Route path="/signup" render={() => <Content user={user} />} />
        <Route path="/content" render={() => <Content user={user} />} />
        <Route path="/myaccount" render={() => <MyAccount user={user} />} />
      </Router>
    </div>
  );
}

export default App;
