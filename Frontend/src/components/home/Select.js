import React from "react"
import { Component } from "react";
import {Form, FormLabel, Button} from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
// import "./Map.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
// var DatePicker = require("react-bootstrap-date-picker");

class Select extends Component{
  constructor(props) {
    super(props);
    this.state = { country:'', date:''};
  }

  selectCountry=(val)=>{
    this.setState({country:val});
    console.log("----country check----",this.state.country);
  }

  selectDate=(val)=>{
    this.setState({date:val});
    console.log("-----date check-----------",this.state.date);
  }

  checkstatus(){
    const data={
      country: this.state.country,
      date: this.state.date,
    }
    console.log("-----check-----",data);
  }  

  render(){
    const{country,date}=this.state;
    return (
      <div style={{ marginLeft:"400px"}}>
      <FormLabel>Select Country</FormLabel>
      <br />
      <CountryDropdown
      value={country}
      onChange={(val) => this.selectCountry(val)}
      onClick={(val) => this.selectCountry(val)} />
      <br/>
      <br/>
    <Form.Group>
      <Form.Label>Select Date</Form.Label>
      <Form.Control
       type="date"
       name="date"
       placeholder="Select date"
       onChange={(val)=> this.selectDate(val)}
       >
      </Form.Control>
    </Form.Group>
    <br/>
      <Button variant="info" onClick={this.checkstatus}>Check</Button>
      <br/>
      <br/>
    </div>
    );
  }
}
export default Select;