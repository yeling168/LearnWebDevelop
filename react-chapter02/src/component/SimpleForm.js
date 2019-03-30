import React, { Component } from "react";

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this);
        console.log(this.refs);
    }
    handleSubmit(event) {
        //通过this.input获取到input元素的值
        // alert ('The title you submitted was' + this.input.value);
        alert("The title you submitted was " + this.refs.input.value);
        event.preventDefault();
    }
    //https://www.jianshu.com/p/56ace3e7f565
    //ref的值是一个函数，这个函数会接收当前元素作为参数，即例子中的input参数指向的是当前元素
    //在函数中，我们把input赋值给了this.input，进而可以在组件的其他地方通过this.input获取这个元素
    
    //在使用非受控组件时，我们常常需要为相应的表单元素设置默认值，但是无法通过表单元素的value属性设置，因为非受控组件中，React无法控制表单元素的value属性，这也意味着一旦在非受控组件中定义了value属性的值，就很难保证后续表单元素的正确性。在这种情况下，我们可以使用defaultValue属性指定默认值
    //
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>title:</label>
                {/* this.input指向当前input元素 */}
                {/* <input type="text" defaultValue="something" ref={(input) => this.input = input} /> */}
                <input type="text" defaultValue="something" ref='input' />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SimpleForm;