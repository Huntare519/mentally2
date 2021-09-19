import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Content.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebaseStuff";

import logo from "../assets/mentally_logo.png";

const axios = require('axios');

function Content(props) {
  const [user] = useAuthState(auth);
  let history = useHistory();

  let imageUrl = 'https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png'
  if (user) {
    imageUrl = user.photoURL;
  }

  // displayName: (...)
  // email: (...)
  // phoneNumber: (...)
  // photoURL: (...)
  // uid: (...
  function sendEmail(contactEmail, name) {

    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      }
    }
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
      <Row className=""></Row>
      <Row className="mt-2">
        <Col className="col-sm-6 justify-content-between flex-logo">
          <Signout2/>
          <h1 className="branding2">Home</h1>
        </Col>
        <Col className="col-sm-6 align-content-end">
          <img className="profile-pic" src={imageUrl} onClick={() => history.push('/myaccount')}/>
        </Col>
      </Row>
      <Row className="">
        <Col className="col-sm-6 ">
          <button class="btn btn-info" onClick={() => console.log('checked in!')}>
            check in
          </button>
        </Col>
      </Row>
      <hr/>
      <Row className="">
        <Col className="col-sm-6 mb-2">
          <button onClick={() => sendEmail('baileyconradt@gmail.com', 'Bailey')} type="submit" class="btn btn-info">
            send email
          </button>
        </Col>
      </Row>
      <Row className="">
        <Col className="col-sm-6 ">
          <button onClick={() => sendEmail('baileyconradt@gmail.com', 'Bailey')} type="submit" class="btn btn-info">
            add contact
          </button>
        </Col>
      </Row>
      <Row className="">
        <Col className="col-sm-6 ">
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

function Signout2(props) {
  let history = useHistory();

  return auth.currentUser && (

    <img className="img-logo2" src={logo} alt="mentally logo" onClick={() => {
  auth.signOut();
  history.push('/');}}/>
  )
}

export default Content;
