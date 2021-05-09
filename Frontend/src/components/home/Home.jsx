/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable array-callback-return */
import React, { Redirect, Component } from 'react';
import {
  Row, Col, Button, ListGroup,
} from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import numeral from 'numeral';
import apiHost from '../../apiHost';
import '../../App.css';
import Map from './Map';
import CountrySelect from './CountrySelect';

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
              <div>
              {/* <CountrySelect/> */}
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
