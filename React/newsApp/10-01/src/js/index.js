var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import BodyIndex from "./components/bodyindex";

import "antd/dist/antd.css";

class Index extends React.Component {
  render() {
    var component = <ComponentHeader />;
    return (
      <div>
        {component}
        <BodyIndex userid={999} username={"Parry"} />
        <div>{this.props.children}</div>
        <ComponentFooter />
      </div>
    );
  }
}
