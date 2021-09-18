import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import "./Content.css";

function Content(props) {
  return (
    <Container fluid>
      <Row className="contentHome">
        <Col className="homeAlign">
          <h1 className="homeText"> Home</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-6 ">
          <h1 className="addContactText"> Add Contacts</h1>
        </Col>
        <Col className="col-sm-6 ">
          <i class="bi bi-plus-circle"></i>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
