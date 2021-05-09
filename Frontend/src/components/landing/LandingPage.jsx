import React from 'react';
import { Redirect } from 'react-router';
import {
  Jumbotron, Container, Col, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../../App.css';
import splitimage from "../../images/world-map.jpg";

export default function LandingPage() {
  return (
    <div>
      <div>
        <NavBar />
        <div>
        {/* <img src={splitimage} width="100%" height="920px"/> */}
        <h1 style={{color:"black"}}>To go or not to go ?<img src={splitimage} width="100%" height="920px"/></h1>
          {/* <Row>
            <Col md={{ span: 6, offset: 1 }}>
              <Jumbotron>
                <Container>
                </Container>
              </Jumbotron>
            </Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
}
