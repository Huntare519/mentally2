import React from "react";
import { useState, useEffect } from 'react'

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Content.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebaseStuff'

function Content(props) {

  const [user] = useAuthState(auth);

  // auth: (...)
  // displayName: (...)
  // email: (...)
  // emailVerified: (...)
  // isAnonymous: (...)
  // metadata: (...)
  // phoneNumber: (...)
  // photoURL: (...)
  // providerData: (...)
  // providerId: (...)
  // refreshToken: (...)
  // tenantId: (...)
  // uid: (...


  return (
    <Container fluid>
      <Row>
        <Col className="col-sm-6 ">
          <h1 className="addContactText"> Welcome Back, {user.displayName}!</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-6 ">
          <h1 className="addContactText"> Add Contacts</h1>
        </Col>
        <Col className="col-sm-6 ">
          <button type="submit" class="btn btn-primary">
            add contact
          </button>
        </Col>
      </Row>

    </Container>
  );
}

export default Content;
