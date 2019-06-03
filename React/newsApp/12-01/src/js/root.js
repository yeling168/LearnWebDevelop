import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Router, Route, hashHistory } from "react-router";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("mainController"));
