import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

import logo from "../assets/mentally_logo.png";
import "./Checkin.css";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function Checkin() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container fluid>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Row className="first-row">
        <Col>
          <h3 className="branding"> </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="col-6 img-logo " src={logo} alt="mentally logo"></img>
        </Col>
        <Col class="col-6">
          <h3 className="branding text center"> Mentally </h3>
        </Col>
      </Row>
      <Row className="row-2">
        <Col className="col-sm-12 col-lg-6 button-align">
          <button
            type="button"
            class="btn new-color"
            onClick={() => setModalShow(true)}
          >
            Check into the App
          </button>
        </Col>
      </Row>
      <Row className="row-2">
        <Col className="col-sm-12 col-lg-6 contacts-align">
          <NavLink to="/content">
            <button type="button" class="btn new-color contacts-align">
              Contacts
            </button>
          </NavLink>
        </Col>
      </Row>
      <Row className="row-2">
        <Col className="col-sm-12 col-lg-6 contacts-align">
          <NavLink to="/#">
            <button type="button" class="btn new-color contacts-align">
              Mental Health Resources
            </button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Mentallys Happy to See You.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hey You!</h4>
        <p>Thanks for checking into the App. Your status has been updated.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Checkin;
