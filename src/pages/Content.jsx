import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import "./Content.css";

function Content(props) {
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
