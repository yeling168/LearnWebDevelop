import React, { Component } from "react";
import Record from "./Record";
//import $ from "jquery";
//import { getJSON } from "jquery";
import axios from "axios";
import * as RecordsAPI from "../utils/RecordsAPI";
import RecordForm from "./RecordForm";

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
    RecordsAPI.getAll()
      .then(response =>
        this.setState({
          records: response.data,
          isLoaded: true
        })
      )
      .catch(error =>
        this.setState({
          isLoaded: true,
          error: error
        })
      );
  }

  addRecord(record) {
    console.log(record);
    this.setState({
      error: null,
      isLoaded: false,
      records: [...this.state.records, record]
    });
  }

  updateRecord(record, data) {
    //   const a={"a":"b"};
    //   const b={"a":"c"};
    //   const c={
    //       ...a,...b
    //   }
    //   console.log(c);
    const recordIndex = this.state.records.indexOf(record);
    const newRecords = this.state.records.map((item, index) => {
      if (index !== recordIndex) {
        // This isn't the item we care about - keep it as-is
        return item;
      }

      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        ...data
      };
    });
    this.setState({
      records: newRecords
    });
  }

  deleteRecord(record) {
    //console.log(record);
    const recordIndex = this.state.records.indexOf(record);
    const newRecords = this.state.records.filter(
      (item, index) => index !== recordIndex
    );
    this.setState({
      record: newRecords
    });
  }

  render() {
    const { error, isLoaded, records } = this.state;
    let recordsComponent;
    if (error) {
      recordsComponent = <div>Error:{error.message}</div>;
    } else if (!isLoaded) {
      recordsComponent = <div>Loading</div>;
    } else {
      recordsComponent = (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) => (
              <Record
                key={record.id}
                record={record}
                handleEditRecord={this.updateRecord.bind(this)}
                handleDeleteRecord={this.deleteRecord.bind(this)}
              />
            ))}
          </tbody>
        </table>
      );
    }
    return (
      <div>
        <h2>Records</h2>
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
        {recordsComponent}
      </div>
    );
  }
}

export default Records;
