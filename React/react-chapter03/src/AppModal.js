import React, { Component } from "react";
import Modal from "./component/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }

  //关闭弹框

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    if (this.state.showModal) {
      return (
        <div>
          <h2>Dashboard</h2>
          <Modal onClose={this.closeModal}>Modal Dialog</Modal>
        </div>
      );
    }
  }
}

export default App;
