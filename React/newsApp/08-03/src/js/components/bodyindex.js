import React from "react";
import ReactDOM from "react-dom";
import BodyChild from "./bodychild";

class BodyIndex extends React.Component {
  //所有的类使用constructor
  constructor() {
    super(); //调用基类的所有的初始化方法
    //对state初始化
    this.state = {
      username: "Parry",
      age: 20
    }; //初始化赋值
  }

  changeUserInfo(age) {
    this.setState({ age: age });
  }
  handleChildValueChange(event) {
    this.setState({
      age: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>
          {this.props.userid}
          {this.props.username}
        </p>
        <p>age:{this.state.age}</p>
        <input
          type="button"
          value="提交"
          onClick={this.changeUserInfo.bind(this, 99)}
        />
        <BodyChild
          handleChildValueChange={this.handleChildValueChange.bind(this)}
        />
      </div>
    );
  }
}

export default BodyIndex;
