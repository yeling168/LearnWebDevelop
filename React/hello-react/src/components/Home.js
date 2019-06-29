import React, { Component } from "react";
import PropTypes from "prop-types";

export class Home extends Component {
  //初始化函数
  constructor(props) {
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
    console.log('Constructor');
  }

  onMakeOlder() {
    //this.setState的第一个参数是一个对象
    this.setState({
      age: this.state.age + 3
    });
    console.log(this);
  }

  handleGreet() {
    this.props.greet(this.state.age);
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  //第一类方法
  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  //第二类方法
  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Component should update", nextProps, nextState);
    if(nextState.status===1){
        return false
    }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  //第三类方法
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    //console.log(this.props);
    console.log('render');
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>
              your name is {this.props.name},your age is {this.state.age}
            </div>
            <p>Status:{this.state.status}</p>
            {/* ES5加括号,this.onMakeOlder()代表执行函数 */}
            <button
              onClick={() => {
                this.onMakeOlder();
              }}
              className="btn btn-primary"
            >
              Make me older
            </button>

            <hr />
            <button
              onClick={this.handleGreet.bind(this)}
              className="btn btn-primary"
            >
              Greet
            </button>

            <hr />
            <input
              type=""
              value={this.state.initialName}
              onChange={event => this.onHandleChange(event)}
              defaultValue={this.props.initialName}
            />
            <button
              onClick={this.onChangeLink.bind(this)}
              className="btn btn-primary"
            >
              change Header Link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  greet: PropTypes.func,
  initialName: PropTypes.string
};
