import React from "react";

class ComponentHeader extends React.Component {
  constructor() {
    super(); //调用基类的所有的初始化方法
    //对state初始化
    this.state = {
      miniHeader: false //默认加载的时候还是高(不是mini)的头部
    };
  }
  switchHeader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    });
  }
  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        paddingTop: this.state.miniHeader ? "3px" : "15px",
        paddingBottom: this.state.miniHeader ? "3px" : "15px"
      }
      //还可以定义其他样式
    };
    return (
      <header
        style={styleComponentHeader.header}
        className="smallFontSize"
        onClick={this.switchHeader.bind(this)}
      >
        <h1>这里是头部</h1>
      </header>
    );
  }
}

export default ComponentHeader;
