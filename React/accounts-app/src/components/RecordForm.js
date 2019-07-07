import React, { Component } from "react";
//https://github.com/hfpp2012/react-accounts-app/blob/master/src/components/RecordForm.js
import * as RecordsAPI from "../utils/RecordsAPI";

class RecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      amount: ""
    };
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount;
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      data: this.state.date,
      title: this.state.title,
      amount: Number.parseInt(this.state.amount, 0)
    };
    RecordsAPI.create(data)
      .then(response => {
        this.props.handleNewRecord(response.data);
        this.setState({
          date: "",
          title: "",
          amount: ""
        });
      })
      .catch(error => console.log(error.message));
  }

  handleChange(event) {
    let name, obj;
    name = event.target.name;
    this.setState(((obj = {}), (obj["" + name] = event.target.value), obj));
  }

  render() {
    return (
      <form
        className="form-inline mb-3"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="form-group mr-1">
          <input
            type="text"
            className="form-control"
            placeholder="Date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group mr-1">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group mr-1">
          <input
            type="text"
            className="form-control"
            placeholder="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          //加括号代表要执行
          disabled={!this.valid()}
        >
          Create record
        </button>
      </form>
    );
  }
}

export default RecordForm;
