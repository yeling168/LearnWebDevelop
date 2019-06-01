import React from "react";
import BodyChild from "./bodychild";

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
        <input
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
