import React from "react";
import BodyChild from "./bodychild";
import ReactMixin from "react-mixin";
import MixinLog from "./mixins";

import {Input} from "antd";
//定义默认属性
const defaultProps = {
  username: "这是一个默认的用户名"
};
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
    //第一种方式，不推荐
    // var mySubmitButton = document.getElementById("submitButton");
    // console.log(mySubmitButton);
    // ReactDOM.findDOMNode(mySubmitButton).style.color = "red";
    //第二种方式
    console.log(this.refs.submitButton);
    this.refs.submitButton.getElementsByClassName.color = "red";
    MixinLog.log();
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
          接收到的父页面的属性:userid
          {this.props.userid}
          username:
          {this.props.username}
        </p>
        <p>age:{this.state.age}</p>
        <Input placeholder="Basic usage" />
        <Input
          id="submitButton"
          ref="submitButton"
          type="button"
          value="提交"
          onClick={this.changeUserInfo.bind(this, 99)}
        />
        {/* <BodyChild
          userid={this.props.userid}
          username={this.props.username}
          handleChildValueChange={this.handleChildValueChange.bind(this)}
        /> */}
        <BodyChild
          {...this.props}
          id={4}
          handleChildValueChange={this.handleChildValueChange.bind(this)}
        />
      </div>
    );
  }
}

export default BodyIndex;

BodyIndex.propTypes = {
  userid: React.PropTypes.number.isRequired
};

BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.propTypes, MixinLog);
