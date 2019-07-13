import React, { Component } from "react";
import { connect } from "react-redux";

const TodoList = props => {
  const { inputValue, list, changeInputValue, handleClick } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

// class TodoList extends Component {
//   render() {
//     const {inputValue,list,changeInputValue,handleClick}=this.props;
//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={changeInputValue} />
//           <button onClick={handleClick}>提交</button>
//         </div>
//         <ul>
//           {list.map((item, index) => {
//             return <li key={index}>{item}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

//和store连接的方式
//state来自store
//把store的数据映射给组件，变成组件的props
const mapStateToProps = state => {
  console.log(state);
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

//对store的数据做修改
//把store.dispatch方法挂载到props上
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      //console.log(e.target.value);
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      //console.log('123');
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },
    handleDelete() {}
  };
};

//让TodoList组件和store连接
//能连接是因为Provider里面的所有组件都能获取到store的内容

// export default connect(
//   null,
//   null
// )(TodoList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
