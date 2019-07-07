import React, { Component } from "react";
import Record from "./Record";
//import $ from "jquery";
//import { getJSON } from "jquery";
import axios from "axios";

class Records extends Component {
  //https://5a54227777e1d20012fa0723.mockapi.io/api/v1/records
  //fetch('https://5a54227777e1d20012fa0723.mockapi.io/api/v1/records').then(function(res){return res.json();}).then(function(json){console.log(json)})
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    };
  }

  componentDidMount() {
    axios
      .get("https://5a54227777e1d20012fa0723.mockapi.io/api/v1/records")
      .then(response =>this.setState({
          records:response.data,
          isLoaded:true
      }) )
      .catch(error =>
        this.setState({
          isLoaded: true,
          error: error
        })
      );
  }
  render() {
    const { error, isLoaded, records } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h2>Records</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <Record key={record.id} {...record} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Records;
