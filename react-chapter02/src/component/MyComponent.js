import React from "react";

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
// class MyComponent extends React.Component {
//   //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
//   //直接将组件的方法赋值给元素的事件属性，同时在类的构造函数中，将这个方法的this 绑定到当前对象
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [1, 2, 3, 4],
//       current: 1
//     };
//   }

//   //每点击一次Button，state中的number增加1

//   handleClick(item, event) {
//     this.setState({
//       current: item
//     });
//     console.log(this);
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.list.map(item => (
//             // bind 除了绑定this ，还绑定item 作为参数，供handleClick 使用
//             <li
//               key={item}
//               className={this.state.current === item ? "current" : ""}
//               onClick={this.handleClick.bind(this, item)}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default MyComponent;

//属性初始化语法

//使用ES7 的property initializer会自动为class中定义的方法绑定this,例如

//这种方式既不需要在构造函数中手动绑定this，也不需要担心组件重复渲染导致的函数重复创建问题。但是
//property initializers 这个特性还处于试验阶段，默认是不支持的。不过，使用官方脚手架
//Create-React-APP创建项目默认是支持这个小户型的。你也可以自行在项目中引入babel
//的transform -class-properties插件获取这个特性支持。
class MyComponent extends React.Component {
  //constructor通常用户初始化组件的state以及绑定事件处理方法等工作
  //直接将组件的方法赋值给元素的事件属性，同时在类的构造函数中，将这个方法的this 绑定到当前对象
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  //ES7 的属性初始化语法，实际上也是使用了箭头函数

  handleClick=(event)=>{
    const number=++this.state.number;
    this.setState({
      number:number
    });
  }

  render(){
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default MyComponent;