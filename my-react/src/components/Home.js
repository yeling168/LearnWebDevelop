import React, { Component } from "react";

import propTypes from "prop-types";

export default class Home extends Component {
  //初始化组件
  constructor(props) {
    //console.log(props);
    //执行父类构造函数的方法
    super(props);
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
    console.log("Constructor");
    //console.log(this);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  handleGreet() {
    this.props.greet(this.state.age);
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    console.log(event);
    this.setState({
      homeLink: event.target.value
    });
  }

  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component should update", nextProps, nextState);
    if (nextState.status === 1) {
      return false;
    }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(preProps, prevState) {
    console.log("Component did update", preProps, prevState);
  }

  componentWillMount() {
    console.log("Component will unmount");
  }
  render() {
    //console.log(this.props);
    console.log("render");
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>
              Your name is {this.props.name},your age is {this.state.age}
            </div>
            {/* <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button> */}
            <p>status:{this.state.status}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.onMakeOlder()}
            >
              Make me older
            </button>
            <hr />
            <button
              className="btn btn-primary"
              onClick={this.handleGreet.bind(this)}
            >
              Greet
            </button>
            <hr />
            <input
              type="text"
              defaultValue={this.props.initialName}
              value={this.state.initialName}
              onChange={event => this.onHandleChange(event)}
            />
            <button
              className="btn btn-primary"
              onClick={this.onChangeLink.bind(this)}
            >
              Change Header Link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  user: propTypes.object,
  greet: propTypes.func,
  initialName: propTypes.string
};
