import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //监听用户名和密码两个input值的变化
  handleChange(event) {
      //屏蔽一些console报错
    event.persist();
    console.log(event);
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  //表单提交的响应函数
  handleSubmit(event) {
    console.log("login successfully");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>用户名:</label>
        {/* 通过value设置input显示内容，通过onChange监听value的变化 */}
        <input
          type="text"
          ηame="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>密码:</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default LoginForm;
