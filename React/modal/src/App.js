import Modal from "./modal/modal";
import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    //这里绑定this因为类中的方法不会自动绑定指向当前示例，我们需要手动绑定，不然不然方法中的this将是undefined，这是其中一种绑定的方法，
    //第二种方法是使用箭头函数的方法，如showModal = () => {}
    //第三种方法是调用的时候绑定
    this.showModal = this.showModal.bind(this);
    this.confirm = this.confirm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      visible: false
    };
  }

  showModal() {
    this.setState({ visible: true });
  }

  closeModal() {
    console.log("我是onClose回调");
  }

  confirm() {
    console.log("我是confirm回调");
  }
  render() {
    const { visible } = this.state;
    return (
      <div className="app">
        <button onClick={this.showModal}>click here</button>
        <Modal
          visible={visible}
          title="这里是自定义的title"
          confirm={this.confirm}
          onClose={this.closeModal}
        >
          这是自定义content
        </Modal>
      </div>
    );
  }
}
export default App;
