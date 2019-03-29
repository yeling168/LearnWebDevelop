import React from "react";

class CheckboxAndradio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      react: false,
      redux: false,
      mobx: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //监听复选框变化，设置复选框的checked状态
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }
  //表单提交的响应函数
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* 设置3个复选框 */}
        <label>
          React
          <input
            type="checkbox"
            name="react"
            value="react"
            checked={this.state.react}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Redux
          <input
            type="checkbox"
            name="redux"
            value="redux"
            checked={this.state.redux}
            onChange={this.handleChange}
          />
        </label>
        <label>
          MobX
          <input
            type="checkbox"
            name="mobx"
            value="mobx"
            checked={this.state.mobx}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default CheckboxAndradio;