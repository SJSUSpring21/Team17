/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
import React, { Redirect, Component } from 'react';
import {
  Row, Col, Button, ListGroup, Card,
} from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import numeral from 'numeral';
import apiHost from '../../apiHost';
import '../../App.css';
import Map from './Map';
import Select from './Select';

import NavBar from '../landing/NavBar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    // let redirectVar = null;
    if (!localStorage.getItem('idToken')) {
      <Redirect to="/" />;
    }
    return (
      <div>
        <NavBar />
        <Row className="mt-5">
          <Col md={{ span: 2, offset: 1 }}>
          <Row>
              <h2>
                Dashboard
              </h2>
              <Select/>
              <br/>
              <br/>
              <div style={{display: 'flex', flexDirection: 'row', width:"100%"}}>
              <Col >
              <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
<Col>
<Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
</div>
              <div style={{margin:"300px",width:'900px'}}>
              <Map />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Home;
