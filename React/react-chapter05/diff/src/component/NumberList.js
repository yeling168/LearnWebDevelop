import React, { Component, PureComponent } from "react";

class NumberList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { numbers: [1, 2, 3, 4] };
        this.handleClick = this.handleClick.bind(this);
    }
    //numbers中新加一个数值
    // handleClick() {
    //     const numbers = this.state.numbers;
    //     //直接修改numbers对象
    //     //点击Button , NumberList 并不会重新调用render ，因为handleClick 中是直接修改this.state.numbers 这个数组的，this.state.numbers的引用在setState前后并没有发生改变，所以shouldComponentUpdate 会返回false,从而终止组件的更新过程
    //     //参见p64 state与不可变对象
    //     //注意，不要使用push、pop、shift、unshift、splice等方法修改数组类型的状态，因为这些方法都是在原数组的基础上修改的，而concat、slice 、filter会返回一个新的数组。
    //     numbers.push(numbers[numbers.length - 1] + 1);
    //     this.setState({
    //         numbers: numbers
    //     });
    // }

    //正确的做法
    handleClick() {
        //直接修改numbers对象
        //参见p64 state与不可变对象
        //注意，不要使用push、pop、shift、unshift、splice等方法修改数组类型的状态，因为这些方法都是在原数组的基础上修改的，而concat、slice 、filter会返回一个新的数组。
        this.setState(preState=>({
            numbers:preState.numbers.concat([preState.numbers[preState.numbers.length - 1] + 1])
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点我</button>
                {this.state.numbers.map((item,i) => (
                    <div key={i}>{item}</div>
                ))}
            </div>
        );
    }
}

export default NumberList;
