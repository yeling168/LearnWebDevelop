import React, { Component } from "react";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

// class UserList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newUser: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       newUser: e.target.value
//     });
//   }

//   //通过props调用父组件的方法新增用户

//   handleClick() {
//     if (this.state.newUser && this.state.newUser.length > 0) {
//       this.props.onAddUser(this.state.newUser);
//     }
//   }

//   //通过props调用父组件的方法，设置当前选中的用户
//   handleUserClick(userId) {
//     this.props.onSetCurrentUser(userId);
//   }
//   render() {
//     return (
//       <div>
//         <ul className="user-list">
//           {this.props.user.map((user)=> {
//             return (
//               /**使用不同样式显示当前用户 */
//               <li key={user.id} className={(this.props.currentUserid===user.id)?'current':''} onClick={this.handleUserClick.bind(this,user.id)}>
//                 <span>{user.name}</span>
//               </li>
//             );
//           })}
//         </ul>
//         <input onChange={this.handleChange} value={this.state.newUser} />
//         <button onClick={this.handleClick}>新增</button>
//       </div>
//     );
//   }
// }

class UserList extends React.Component {
  //通过props调用父组件的方法，设置当前用户
  constructor(props) {
    super(props);
  }
  handleUserClick(userId) {
    this.props.onSetCurrentUser(userId);
  }

  render() {
    return (
      <div>
        <ul className="user-list">
          {this.props.user.map(user => {
            return (
              /**使用不同样式显示当前用户 */
              <li
                key={user.id}
                className={
                  this.props.currentUserid === user.id ? "current" : ""
                }
                onClick={this.handleUserClick.bind(this, user.id)}
              >
                <span>{user.name}</span>
              </li>
            );
          })}
        </ul>
        {/* 传递UserListConta 工ner 的handleAddUser 方法 */}
        <UserAdd onAddUser = {this.props.onAddUser}/>
      </div>
    );
  }
}

export default UserList;
