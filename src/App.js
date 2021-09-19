import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import Content from "./pages/Content";
import Homepage from "./pages/Homepage";
import MyAccount from "./pages/MyAccount";
import Checkin from "./pages/Checkin";
import Resources from "./pages/Resources";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebaseStuff";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="">
      <Router>
        <Route path="/" exact render={() => <Homepage />} />
        <Route path="/login" render={() => <Content user={user} />} />
        <Route path="/checkin" render={() => <Checkin user={user} />} />
        <Route path="/signup" render={() => <Content user={user} />} />
        <Route path="/content" render={() => <Content user={user} />} />
        <Route path="/myaccount" render={() => <MyAccount user={user} />} />
        <Route path="/resources" render={() => <Resources user={user} />} />
      </Router>
    </div>
  );
}

export default App;
