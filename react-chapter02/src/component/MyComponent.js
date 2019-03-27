import React from "react";

// class MyComponent extends React.Component{
//     //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
//     constructor(props){
//         super(props);
//         this.state={number:0};
//     }

//     render(){
//         return (
//             <button onClick={ (event)=>{console.log(this.state.number);}}>
//                 Click
//             </button>
//         )
//     }
// }

// export default MyComponent;

class MyComponent extends React.Component {
  //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  //每点击一次Button，state中的number增加1

  handleClick(event) {
    const number = ++this.state.number;
    this.setState({
      number: number
    });
  }
  render() {
    return (
      <button
        onClick={event => {
          this.handleClick(event);
        }}
      >
        Click
      </button>
    );
  }
}

export default MyComponent;
