import React from "react";
import { className } from "postcss-selector-parser";
import "../theme/MyComponent.css";

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
//使用箭头函数
// class MyComponent extends React.Component {
//   //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }

//   //每点击一次Button，state中的number增加1

//   handleClick(event) {
//     const number = ++this.state.number;
//     this.setState({
//       number: number
//     });
//     console.log(this.state.number);
//   }
//   render() {
//     return (
//       <button
//         onClick={event => {
//           this.handleClick(event);
//         }}
//       >
//         Click
//       </button>
//     );
//   }
// }

// export default MyComponent;

//使用组件方法
// class MyComponent extends React.Component {
//     //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
//     //直接将组件的方法赋值给元素的事件属性，同时在类的构造函数中，将这个方法的this 绑定到当前对象
//     constructor(props) {
//       super(props);
//       this.state = { number: 0 };
//       this.handleClick=this.handleClick.bind(this);
//     }

//     //每点击一次Button，state中的number增加1

//     handleClick(event) {
//       const number = ++this.state.number;
//       this.setState({
//         number: number
//       });
//       console.log(this.state.number);
//     }
//     render() {
//       return (
//         <button
//           onClick={
//             this.handleClick
//           }
//         >
//           Click
//         </button>
//       );
//     }
//   }

//   export default MyComponent;

//有些开发者还习惯在为元素的事件属性赋值时，同时为事件处理函数绑定this
// class MyComponent extends React.Component {
//   //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
//   //直接将组件的方法赋值给元素的事件属性，同时在类的构造函数中，将这个方法的this 绑定到当前对象
//   constructor(props) {
//     super(props);
//     this.state = { number: 0 };
//   }

//   //每点击一次Button，state中的number增加1

//   handleClick(event) {
//     const number = ++this.state.number;
//     this.setState({
//       number: number
//     });
//     console.log(this.state.number);
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.state.number}</div>
//         <button onClick={(this.handleClick = this.handleClick.bind(this))}>
//           Click
//         </button>
//       </div>
//     );
//   }
// }

// export default MyComponent;

//下面的例子需要为handleClick 传入参数item :
class MyComponent extends React.Component {
  //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
  //直接将组件的方法赋值给元素的事件属性，同时在类的构造函数中，将这个方法的this 绑定到当前对象
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4],
      current: 1
    };
  }

  //每点击一次Button，state中的number增加1

  handleClick(item, event) {
    this.setState({
      current: item
    });
  }
  render() {
    return (
      <ul>
        {this.state.list.map(item => (
          // bind 除了绑定this ，还绑定item 作为参数，供handleClick 使用
          <li
            key={item}
            className={this.state.current === item ? "current" : ""}
            onClick={this.handleClick.bind(this, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default MyComponent;
