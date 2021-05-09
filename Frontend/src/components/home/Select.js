import React from "react"
import { Component } from "react";
import {Form} from 'react-bootstrap';
// import "./Map.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
// var DatePicker = require("react-bootstrap-date-picker");

class Select extends Component{
  constructor() {
    super();
    this.state = {
    };

  }

  // getInitialState(){
  //   var value = new Date().toISOString();
  //   return {
  //     value: value
  //   }
  // }

  // handleChange(value, formattedValue) {
  //   this.setState({
  //     value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
  //     formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
  //   });
  // }
  // componentDidUpdate(){
  //   // Access ISO String and formatted values from the DOM.
  //   var hiddenInputElement = document.getElementById("example-datepicker");
  //   console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
  //   console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
  // }
  render(){
    return (
    <Form.Group controlId="dob">
      <Form.Label>Select Date</Form.Label>
      <Form.Control
       type="date"
       name="dob"
       placeholder="Select date">

      </Form.Control>
    </Form.Group>
    );
  }
}
export default Select;