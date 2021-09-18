import React from "react";
import { auth, firestore } from "../firebaseStuff.js";
import firebase from "firebase/compat/app";
import "./MyAccount.css";

import { Col, Row, Container } from "react-bootstrap";

function MyAccount(props) {
  return (
    <Container fluid>
      <Row>
        <Col className="col-sm-12 account d-flex justify-content-end">
          My Account
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          <h3> Email</h3>
          <h3> Date Joined</h3>
        </Col>
      </Row>
    </Container>
  );
}

function Signout(props) {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
}

export default MyAccount;
