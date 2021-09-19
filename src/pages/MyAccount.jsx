import React from "react";
import { auth, firestore } from "../firebaseStuff.js";
import firebase from "firebase/compat/app";
import "./MyAccount.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

import { Col, Row, Container, Button } from "react-bootstrap";
import logo from "../assets/mentally_logo.png";

function MyAccount(props) {
  const [user] = useAuthState(auth);

  let history = useHistory();

  let imageUrl = 'https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png'
  if (user) {
    imageUrl = user.photoURL;
  }

  return (
    <Container fluid>
      <Row className="mt-2">
        <Col className="col-sm-6 justify-content-between flex-logo">
          <img className="img-logo2" src={logo} alt="mentally logo" onClick={() => {
            history.push('/content');
          }} />
          <h1 className="branding3">Profile</h1>
        </Col>
        <Col className="col-sm-6 align-content-end">
          <img className="profile-pic" src={imageUrl} onClick={() => history.push('/myaccount')} />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          <h3> Email</h3><p>{user.email}</p>
          <h3> Date Joined</h3><p>September 19th, 2021</p>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          <Signout />
        </Col>
      </Row>
    </Container>
  );
}

function Signout(props) {
  let history = useHistory();

  return auth.currentUser && (
    <Button className='btn-info signout-button' onClick={() => {
      auth.signOut();
      history.push('/');
    }}>Sign Out</Button>
  )
}


export default MyAccount;
