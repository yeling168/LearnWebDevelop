import React from "react";

class ReactStackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "mobx"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handSubmit = this.handSubmit.bind(this);
  }
  //监听下拉列表的变化
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  //表单提交的响应函数
  handSubmit(event) {
    alert("You picked" + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handSubmit}>
        <label>
          Pick one library:
          {/* select的value属性定义当前哪个option元素处于选中状态 */}
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="mobx">MobX</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ReactStackForm;