import React from "react";
import {auth, firestore} from '../firebaseStuff.js';
import firebase from 'firebase/compat/app';
import { useHistory } from "react-router-dom";

import { Col, Row, Container } from "react-bootstrap";

import logo from "../assets/mentally_logo.png";
import "./Homepage.css";

import { HeartFill } from 'react-bootstrap-icons';

function Content(props) {
  let history = useHistory();
  return (
    <Container fluid>
      <Row className="first-row">
        <Col>
          <h3 className="branding"> </h3>
        </Col>
      </Row>
      <Row>
        <Col >
          <img className="col-6 img-logo" src={logo} alt="mentally logo"></img>
        </Col>
        <Col class="col-6 ">
          <h3 className="branding text center"> Mentally </h3>
        </Col>
      </Row>
      <Row className="row-2">
        <Col className="col-sm-12 col-lg-6 button-align">
          <Login/>
        </Col>
        <Col className="col-sm-12 col-lg-6 button-align">
          <button type="button" className="btn btn-info" onClick={e => {history.push('/resources')}}>
            {" "}
            resources
          </button>
        </Col>
      </Row>
      <p className="bottom-text ">made with <HeartFill color="#FF3B3F"/> for HackMIT</p>
    </Container>
  );
}

function Login(props) {
  let history = useHistory();
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(() => {
        history.push('/content');
      }).catch(err => console.log(err));
  }
  return (
    <button type="button" className="btn btn-info" onClick={signInWithGoogle}>
    {" "}
    login
  </button>
                );
}



export default Content;
