import React from "react";
import { Component } from "react";
import { Row, Col,Form, FormLabel, Button, Card } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Moment from 'moment';
// import "./Map.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
// var DatePicker = require("react-bootstrap-date-picker");

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", date: "", formatdate:"" };
  }

  selectCountry = (val) => {
    this.setState({ country: val });
  };

  selectDate = (val) => {
    this.setState({
      [val.target.name]:val.target.value
    });
  };

  checkstatus =()=> {
    let d1=this.state.date.split('-')
    let d2 = `${d1[1]}/${d1[2]}/${d1[0]}`
    console.log(d2)
    this.setState({
      formatdate: d2,
    })
    const data = {
      country: this.state.country,
      date: d2,
    };
    console.log("-----check-----", data);
  }

  render() {

    // const { country, date } = this.state;
    // console.log("----country check----", this.state.country);
    // console.log("-----date check-----------", this.state.date);


    return (
      <Row>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}>
                  <Col md={12}>
                  <div style={{ marginLeft: "10px" }}>
        <FormLabel>Select Country</FormLabel>
        <br />
        <CountryDropdown
          value={this.state.country}
          onChange={(val) => this.selectCountry(val)}
          // onClick={(val) => this.selectCountry(val)}
        />
        <br />
        <br />
        <Form.Group>
          <Form.Label>Select Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Select date"
            onChange={this.selectDate}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button variant="info" onClick={this.checkstatus}>
          Check
        </Button>
        <br />
        <br />
      </div>
                        </Col>
                  <Divider style={{marginLeft:"25%", marginBottom:"20px"}} orientation="vertical" flexItem />
                  {/* <Col md={12}> */}
<Col md={9}>
                    <Card>
                      <Card.Header>UNSAFE</Card.Header>
                      <Card.Body>
                        <Card.Title>UNSAFE COUNTRIES</Card.Title>
                        <Card.Text>
                          This countries are not safe to travel as the new cases
                          are rising and active cases are high.
                        </Card.Text>
                        <Button variant="danger">UNSAFE TO VISIT</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* </Col> */}
                </div>      
      
      </Row>
    );
  }
}
export default Select;
