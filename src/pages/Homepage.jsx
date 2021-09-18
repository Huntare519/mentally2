import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import logo from "../assets/mentally_logo.png";
import "./Homepage.css";

import { Button } from "react-bootstrap";

function Content() {
  return (
    <Container fluid>
      <Row className="first-row">
        <Col>
          <h3 className="branding"> </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <img class="col-6 img-logo " src={logo} alt="mentally logo"></img>
        </Col>
        <Col class="col-6">
          <h3 className="branding text center"> Mentally </h3>
        </Col>
      </Row>
      <Row className="row-2">
        <Col className="col-sm-12 col-lg-6 button-align">
          <button type="button" className="btn btn-light">
            {" "}
            login
          </button>
        </Col>
        <Col className="col-sm-12 col-lg-6 button-align">
          <button type="button" className="btn btn-light">
            {" "}
            sign up
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
