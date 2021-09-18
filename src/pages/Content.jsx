import React from "react";
import {auth, firestore} from '../firebaseStuff.js';
import firebase from 'firebase/compat/app';

function Content(props) {

  


  return (
    <div>
      <p className="test"> Content Page</p>
      {props.user ? <Signout/> : <Login/>}
      <style>
      </style>
    </div>
    
  );
}

function Login(props) {
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
                );
}


function Signout(props) {
  return auth.currentUser && (
<button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default Content;
