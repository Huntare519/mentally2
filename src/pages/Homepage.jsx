import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import logo from "../assets/mentally_logo.png";
import "./Homepage.css";

import { Button } from "react-bootstrap";

function Content() {
  return (
<<<<<<< HEAD
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
=======
    <div className="">
      <h3 className="branding"> Mentally </h3>
      <div>
        <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c13d14731358e5b4339c564%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416"/>
        <p>this is a test</p>
      </div>
    </div>
>>>>>>> 1199ab7e63a6a576fc53ad9ad9d4beec24115fdd
  );
}

export default Content;
