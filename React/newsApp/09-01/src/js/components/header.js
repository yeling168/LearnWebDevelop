import React from "react";

class ComponentHeader extends React.Component {
  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        paddingTop: "15px",
        paddingBotton: "15px"
      }
    };
    return (
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1>这里是头部</h1>
      </header>
    );
  }
}

export default ComponentHeader;
