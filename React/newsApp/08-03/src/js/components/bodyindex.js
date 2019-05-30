import React from "react";
import ReactDOM from "react-dom";

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
  render() {
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>
          {this.props.userid}
          {this.props.username} 
        </p>
      </div>
    );
  }
}

export default BodyIndex;
