import React, { Component } from "react";

class AutoFocusTextInput extends Component {
    constructor(props) {
        super(props);
        this.blur = this.blur.bind(this);
    }

    componentDidMount() {
        //通过ref让input自动获取焦点
        this.textInput.focus();
        console.log(this);
    }

    //让input失去焦点
    blur() {
        this.textInput.blur();
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={input => {
                        this.textInput = input;
                    }}
                />
            </div>
        );
    }
}

//函数组件虽然不能定义ref属性，但这并不影响在函数组件内部使用ref来引用其他DOM元素或组件

function MyFunctionComponent(){
    let textInput=null;

    function handleClick(){
        textInput.focus();
    }

    return (
        <div>
            <input type="text" ref={(input)=>{textInput=input}}></input>
            <button onClick={handleClick}>获取焦点</button>
        </div>
    )
}

// function Children(props){
//     //子组件使用父组件传递的inputRef，为input的ref赋值
//     return (
//         <div>
//             <input ref={props.inputRef}/>
//         </div>
//     )
// }

// class Parent extends Component{
//     render(){
//         //自定义一个属性inputRef，值是一个函数
//         return (
//             <Children inputRef={el=>this.inputElement=el}/>
//         )
//     }
// }


class Container extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //通过ref调用AutoFocusTextInput组件的方法
        this.inputInstance.blur();
        console.log(this);
    }

    render() {
        return (
            <div>
                <AutoFocusTextInput
                    ref={input => {
                        this.inputInstance = input;
                    }}
                />
                <MyFunctionComponent/>
                <button onClick={this.handleClick}>失去焦点</button>
                {/* <Parent/> */}
            </div>
        );
    }
}

export default Container;
