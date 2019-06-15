import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { Router, Route, hashHistory } from "react-router";
import PCIndex from "./components/pc_index";
import PCNewsDetails from "./components/pc_news_details";
import MobileNewsDetails from "./components/mobile_news_details";
import MobileIndex from "./components/mobile_index";
import "antd/dist/antd.css";
import MediaQuery from "react-responsive";
import PCUserCenter from "./components/pc_usercenter";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex} />
            <Route path="/details/:uniquekey" component={PCNewsDetails} />
            <Route path="/usercenter" component={PCUserCenter}></Route>
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path="/" component={MobileIndex} />
            <Route path="/details/:uniquekey" component={MobileNewsDetails} />
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("mainContainer"));

//ReactDOM.render(<Root />, document.getElementById("mainController"));

//VM1882 bundle.js:913 Uncaught Invariant Violation: _registerComponent(...): Target container is not a DOM element.
//https://www.imooc.com/qadetail/164384
