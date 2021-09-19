import React from "react";
import { useState, useEffect } from 'react'

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Content.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebaseStuff'

const axios = require('axios');

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
  function sendEmail(contactEmail, name) {

    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    }
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

    axios.post('https://us-central1-mentally-ee47e.cloudfunctions.net/sendEmail', {
      email: contactEmail,
      name: name
    }, config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
          <button onClick={() => sendEmail('bconradt@wisc.edu', 'Bailey')} type="submit" class="btn btn-primary">
            add contact
          </button>
        </Col>
      </Row>

    </Container>
  );
}

export default Content;
