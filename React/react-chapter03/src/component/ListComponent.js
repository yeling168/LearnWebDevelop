import React, { Component } from "react";

class UnionApp extends Component {
  render() {
    return [
      <ul>
        <ListComponent />
      </ul>,
      <StringComponent />
    ];
  }
}
class ListComponent extends Component {
  render() {
    return (
      <div>
        <li key="A">First item</li>
        <li key="B">Second item</li>
        <li key="C">Third item</li>
      </div>
    );
  }
}

class StringComponent extends Component {
  render() {
    return "Just a strings";
  }
}

export default UnionApp;
