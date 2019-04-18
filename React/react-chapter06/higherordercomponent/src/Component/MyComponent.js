import React ,{ Component } from "react";

class MyComponent extends Component {
    //componentWillMount
    //这个方法在组件被挂载到DOM 前调用，且只会被调用一次。这个方法在实际项目中很少会用到，因为可以在该方法中执行的工作都可以提前到constructor中。在这个方法中调用this.setState不会引起组件的重新渲染。
    componentWillMount() {
        localStorage.setItem("data", 'Tom');
        let data = localStorage.getItem("data");
        this.setState({ data });
    }
    render() {
        return <div>{this.state.data}</div>;
    }
}

export default MyComponent;