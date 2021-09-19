import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Col, Row, Container, Button } from "react-bootstrap";
import "./Content.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebaseStuff";
import ContactCard from "../components/ContactCard";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { render } from "@testing-library/react";

import img2 from "../assets/mentally_logo.png";

var nodemailer = require("nodemailer");

function addCard(formBasicName, formBasicEmail, formBasicPhoto, formBasicText) {
  console.log(formBasicName);
  console.log(formBasicEmail);
  console.log(formBasicPhoto);
  console.log(formBasicText);

  return (
    <Row>
      <ContactCard
        name={formBasicName}
        email={formBasicEmail}
        photo={formBasicPhoto}
        text={formBasicText}
      />
    </Row>
  );
}

function Content(props) {
  const [user] = useAuthState(auth);

  let appEmail = "mentally.app.team@gmail.com";
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let profilePic = null;
  if (props.user.photoURL == null) {
    profilePic =
      "https://images.unsplash.com/photo-1541958409-7618fd1ad26e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2848&q=80";
  } else {
    profilePic = props.user.photoURL;
  }

  return (
    <Container fluid>
      <Row className="content-row">
        <Col className="col-4 align-center content-home">
          <h3 className="home-text"> Home</h3>
        </Col>
        <Col className="col-4"></Col>
        <Col className="col-4">
          <img className="profile1" src={profilePic}></img>
        </Col>
      </Row>
      <Row className="content-row">
        <Col className="col-8 align-center">
          <h1 className="addContactText"> Add Contacts</h1>
        </Col>
        <Col className="col-4 align-center">
          <button
            type="submit"
            className="btn plus-button"
            onClick={handleShow}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </Col>
      </Row>
      <Row>
        <ContactCard name="hunter goff" email="hfgoff@wisc.edu" />
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone Number" />
              <Form.Text className="text-muted">
                We'll never share this information with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
              <Form.Label>Profile Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the URL of the photo"
              />
              <Form.Text className="text-muted">That looks great!.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Message To Your Friend</Form.Label>
              <Form.Control type="text" placeholder="be creative!" />
              <Form.Text className="text-muted">Short and Sweet!</Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={(e) =>
                addCard(
                  document.getElementById("formBasicName").value,
                  document.getElementById("formBasicEmail").value,
                  document.getElementById("formBasicPhoto").value,
                  document.getElementById("formBasicText").value,
                  () => {
                    //console.log("success!");
                  }
                )
              }
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

function Signout(props) {
  let history = useHistory();

  return (
    auth.currentUser && (
      <Button
        className="btn-info signout-button"
        onClick={() => {
          auth.signOut();
          history.push("/");
        }}
      >
        Sign Out
      </Button>
    )
  );
}

function Signout2(props) {
  let history = useHistory();

  return (
    auth.currentUser && (
      <img
        className="img-logo2"
        src={img2}
        alt="mentally logo"
        onClick={() => {
          auth.signOut();
          history.push("/");
        }}
      />
    )
  );
}

export default Content;
