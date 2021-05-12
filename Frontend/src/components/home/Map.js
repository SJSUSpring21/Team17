import React from "react"
// import "./Map.css"
import { Row, Col,Form, FormLabel, Button, Card } from "react-bootstrap";
import { WorldMap } from "react-svg-worldmap";
import axios from 'axios';
import apiHost from '../../apiHost';

export default function Map() {
  const data =
    [
      { country: "cn", value: 10 }, // china
      { country: "in", value: 20 }, // india
      { country: "us", value: 30 },  // united states
      { country: "id", value: 40 },  // indonesia
      { country: "pk", value: 50 },  // pakistan
      { country: "br", value: 60 },  // brazil
      { country: "ng", value: 70 },  // nigeria
      { country: "gb", value: 80 },  // bangladesh
      { country: "ru", value: 90 },  // russia
      { country: "mx", value: 100 }   // mexico
    ]

    const predictiondate=async()=>{
      const date=localStorage.getItem('date');
      const send={
        date:date
      }
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common.authorization = localStorage.getItem('idToken');
      await axios.post(`${apiHost}/api/prediction/date`,send);
      // console.log("------check-----",message);
    }

  return (
    <div>
        <Button variant="info" onClick={predictiondate}>
          Check
        </Button>
       <WorldMap color="red" title="Top 10 Recommended Countries"  value-suffix="people" size="responsive" data={data} />
    </div>
  )
}