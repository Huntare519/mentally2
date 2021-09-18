import React from "react";
import { useState, useEffect } from "react";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Content.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebaseStuff";
var nodemailer = require("nodemailer");

function Content(props) {
  const [user] = useAuthState(auth);

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
      <Row className=""></Row>
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
