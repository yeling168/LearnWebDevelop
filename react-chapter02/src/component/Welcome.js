import React from "react";
import PropTypes from "prop-types";
import "../theme/Welcome.css";

function Welcome(props) {
  const h3Style = {
    width: "100%",
    height: "50px",
    backgroundColor: "green",
    fontSize: "20px"
  };
  return (
    <div>
      <h1 className="foo">Hello,{props.name}</h1>
      <h2
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "red",
          fontSize: "20px"
        }}
      >
        Hello,React
      </h2>
      <h3 style={h3Style}>Hello,I am React</h3>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string
};
export default Welcome;
