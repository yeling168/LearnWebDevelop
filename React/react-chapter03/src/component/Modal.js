import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    //从根节点下创建一个div节点
    this.container = document.createElement("div");
    document.body.appendChild(this.container);
    console.log(this);
    console.log(this.props.children);
  }

  //组件从DOM 中被卸载的过程， 这个过程中只有一个生命周期方法componentWillUnmount
  componentWillUnmount() {
    //removeChild() 方法从子节点列表中删除某个节点
    document.body.removeChild(this.container);
  }

  render() {
    //创建的DOM数挂载到this.container指向的div节点下面
    //HTML字符字体参考:&times;代表的是x  http://www.w3school.com.cn/html/html_entities.asp
    return ReactDOM.createPortal(
      <div>
        <div className="modal">
          <span className="close" onClick={this.props.onClose}>
            &times;
          </span>
        </div>
        <div className="content">{this.props.children}</div>
      </div>,
      this.container
    );
  }
}

export default Modal;
