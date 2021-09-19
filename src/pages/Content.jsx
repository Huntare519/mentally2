import React from "react";
import { useState, useEffect } from "react";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Content.css";
<<<<<<< HEAD
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebaseStuff";
var nodemailer = require("nodemailer");
=======
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebaseStuff'
>>>>>>> 74eb29ba87bd95e451f78c51591d1e93aa12544f

const axios = require('axios');

function Content(props) {
  const [user] = useAuthState(auth);

<<<<<<< HEAD
  let appEmail = "mentally.app.team@gmail.com";
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   firestore.collection('superSecretPassword').onSnapshot((snapshot) => {
  //     const password = snapshot.docs.sort().map((doc) => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     setPassword(password[0].password);
  //   })
  // }, []);

  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: appEmail,
  //     pass: password
  //   }
  // });

  // var mailOptions = {
  //   from: appEmail,
  //   to: 'bconradt@wisc.edu',
  //   subject: 'Sending Email using Node.js',
  //   text: 'That was easy!'
  // };

  // function sendEmail() {
  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  // }

=======
>>>>>>> 74eb29ba87bd95e451f78c51591d1e93aa12544f
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
<<<<<<< HEAD
      <Row className=""></Row>
=======
      <Row>
        <Col className="col-sm-6 ">
          <h1 className="addContactText"> Welcome Back, {user.displayName}!</h1>
        </Col>
      </Row>
>>>>>>> 74eb29ba87bd95e451f78c51591d1e93aa12544f
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
