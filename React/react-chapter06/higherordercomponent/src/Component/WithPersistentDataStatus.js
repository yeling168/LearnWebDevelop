import React, { Component } from "react";

function withControlledState(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
      this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleValueChange(event) {
      this.setState({
        value: event.target.value
      });
    }
    render() {
      //return <div>{this.props.data}</div>;
      //newProps保存受控组件需要使用的属性和事件处理函数
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      };
      //通过{...this.props}把传递给当前组件的属性传递给被包装的组件
      //return <WrappedComponent {...this.props} {...newProps} />;
      //我们还可以在高阶组件渲染WrappedComponent 时添加额外的元素，这种情况通常用于为WrappedComponent增加布局或修改样式。
      return <div style={{backgroundColor:'red'}}><WrappedComponent {...this.props} {...newProps}/></div>
    }
  };
}

class SimpleControlledComponent extends Component{
  render(){
    //此时的SimpleControlledComponent 为无状态组件，状态由高阶组件维护
    return <input name="simple" {...this.props.controlledProps}/>
  }
}

const ComponentWithControlledState = withControlledState(SimpleControlledComponent);

export default ComponentWithControlledState;