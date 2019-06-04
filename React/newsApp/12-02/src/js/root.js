import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Router, Route, hashHistory } from "react-router";
import PCIndex from './components/pc_index';
import MediaQuery from "react-responsive";
import MobileIndex from './components/mobile_index';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery  query='(min-device-width:1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery  query='(max-device-width:1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("mainController"));
