var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import BodyIndex from "./components/bodyindex";

class Index extends React.Component {
  render() {
    var component = <ComponentHeader />;
    return (
      <div>
        {component}
        <BodyIndex userid={123456} username={"nick"} />
        <ComponentFooter />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("example"));
