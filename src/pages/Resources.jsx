import React from "react";
import { useHistory } from "react-router-dom";

import { Col, Row, Container, Card } from "react-bootstrap";

import logo from "../assets/mentally_logo.png";
import "./Homepage.css";

import { ArrowLeft } from 'react-bootstrap-icons';

export default function Resources() {
    let history = useHistory();
    return (
        <Container fluid>
            {/* <Row className="first-row">
        <Col>
          <h3 className="branding"> </h3>
        </Col>
      </Row> */}
            <Row className='mt-2'>
                <Col>
                    <a onClick={e => { history.push('/') }}>
                        <img className="col-6 " src={logo} alt="mentally logo"></img>
                    </a>
                </Col>
                <Col class="col-6">
                    <h3 className="branding text center"> Resources </h3>
                </Col>
            </Row>
            <Row className="row-1 justify-content-center">
                <Card
                    bg='info'
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-3"
                >
                    <Card.Header>BetterHelp</Card.Header>
                    <Card.Body>
                        <Card.Title>Private Mental Health Counseling</Card.Title>
                        <Card.Text>
                            <a href='https://www.betterhelp.com/get-started/'>https://www.betterhelp.com/get-started/</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="row-1 justify-content-center">
                <Card
                    bg='info'
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-3"
                >
                    <Card.Header>University Health Services (UHS)</Card.Header>
                    <Card.Body>
                        <Card.Title>Resources through UW-Madison</Card.Title>
                        <Card.Text>
                            <a href='https://www.uhs.wisc.edu/mental-health/'>https://www.uhs.wisc.edu/mental-health/</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="row-1 justify-content-center">
                <Card
                    bg='info'
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-3"
                >
                    <Card.Header>National Institute of Mental Health</Card.Header>
                    <Card.Body>
                        <Card.Title>Free Resources through the US Government</Card.Title>
                        <Card.Text>
                            <a href='https://www.nimh.nih.gov/health/find-help'>https://www.nimh.nih.gov/health/find-help</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="row-1 ">
                    <ArrowLeft height='30px' onClick={e => { history.push('/') }}/>
            </Row>
        </Container>
    );
}

