import React from "react";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

//组件在挂载阶段如何与服务器通信
//componentDidMount
// 在组件被挂载到DOM 后调用， 且只会被调用一次。这时候已经可以获取到DOM 结构，因此
// 依赖DOM 节点的操作可以放到这个方法中。这个方法通常还会用于向服务器端请求数据。在这个
// 方法中调用this.s etState 会引起组件的重新渲染。

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUserId: null
    };
    this.handleAddUser = this.handleAddUser.bind(this);
  }
  //创建context对象，包含onAddUser方法
  getChildContext() {
    return {
      onAddUser: this.handleAddUser
    };
  }
  componentDidMount() {
    var that = this;
    fetch("path/to/user-api").then(function(response) {
      response.json().then(function(data) {
        that.setState({
          users: data
        });
      });
    });
  }

  // 在执行fetch 请求时，要先对新老props 中的category 做比较， 只
  // 有不一致才说明category 有了更新，才需要重新进行服务器通信。componentWillReceiveProps 的执
  // 行并不能保证props 一定发生了修改。
  /* componentWillReceiveProps(nextProps) {
        var that = this;
        if (nextProps.category !== this.props.category) {
            fetch('/ path/to/user-api?category=' + nextProps.category).then(function (response) {
                response.json().then(function (data) {
                    that.setState({
                        users: data
                    })
                })
            })
        }
    } */

  //新增用户
  // handleAddUser(user) {
  //   var that = this;
  //   fetch("path/to/save-user-api", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: user
  //     })
  //   }).then(function(response) {
  //     response.json().then(function(newUser) {
  //       //将服务器返回的新用户添加到state中
  //       that.setState(preState => ({
  //         users: preState.users.concat([newUser])
  //       }));
  //     });
  //   });
  // }

  handleAddUser(user) {
    this.setState(preState => ({
      users: preState.users.concat([{ id: "c", name: "cc" }])
    }));
  }

  //设置当前选中用户
  handleSetCurrentUser(userId) {
    this.setState({
      currentUserId: userId
    });
  }

  render() {
    //根据currentUserId筛选出当前用户对象
    const filterUsers = this.state.users.filter(user => {
      user.id === this.state.currentUserId;
    });
    const currentUser = filterUsers.length > 0 ? filterUsers[0] : null;
    return (
      // 通过props传递users
      <div>
        <UserList
          users={this.state.users}
          currentUserid={this.state.currentUserid}
          onSetCurrentUser={this.handleSetCurrentUser}
        />
        <UserDetail currentUser={currentUser} />
      </div>
    );
  }
}
//UserListContainer是在componentDidMount中与服务器进行通信的，这时候组件已经挂载，真实的DOM也已经渲染完成，是调用服务器API最安全的地方，也是React官方推荐的进行服务器通信的地方

//声明context的属性
UserListContainer.childContextTypes = {
  onAddUser: propsTypes.func
};
export default UserListContainer;