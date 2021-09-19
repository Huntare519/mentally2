import React from "react";
import { auth, firestore } from "../firebaseStuff.js";
import firebase from "firebase/compat/app";
import "./MyAccount.css";
import mypicture from '../elon.jpg'
import emailicon from '../envelope-fill.svg'
import calendaricon from '../calendar-date-fill.svg'
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";

function MyAccount() {
  const [user] = useAuthState(auth);
  let history = useHistory();
  let imageUrl = 'https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png'
  if (user) {
    imageUrl = user.photoURL;
  }
  return (
    <Container fluid>
      <Row>
        <Col className="col-3 col">
          <img className="my-picture" src= {mypicture} />
        </Col>
        <Col className="col account justify-content-end">
          My Account
        </Col>
      </Row>
      <Row>
        <Col className="col" style={{paddingTop: '30px'}}>
        <div className = "background"> 
          <div className = "email">
            <img className="emailicon" src={emailicon} />
            <div className = "myemail">
              elonthegoat@tesla.com
            </div>
          </div> 
          <div className = "join">
            <img className="calendaricon" src={calendaricon} />
            <div className = "joindate">
              September 19, 2021
            </div>
          </div>
          <div className="buttons">
            <button className="photo"> Update Photo </button>
          </div>
          <div className="buttons2">
            <button className="lucky"> I'm Feeling Lucky </button>
          </div>
          <div className="buttons2">
            <button className="about"> About the App </button>
          </div>
        </div>
        <div className = "bottom">
          <div className="home">
            <button className="homebutton"> Home </button>
          </div>
          <div className="signout">
            <button className="signoutbutton" onClick={() => { auth.signOut(); history.push('/');}}> Sign Out </button>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyAccount;
