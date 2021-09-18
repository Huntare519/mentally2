import React from "react";
import {auth, firestore} from '../firebaseStuff.js';
import firebase from 'firebase/compat/app';

function Content(props) {
  
  return (<div> Account Page </div>);


function Signout(props) {
  return auth.currentUser && (
<button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default Content;
