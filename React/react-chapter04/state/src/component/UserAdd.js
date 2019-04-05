import React from "react";

class UserAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: ''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            newUser:e.target.value
        });
    }

    //通过props 调用父组件的方法新增用户
    handleClick() {
        if (this.state.newUser && this.state.newUser.length > 0) {
            //this.props.onAddUser(this.state.newUser);
            this.context.onAddUser(this.state.newUser);
        }
    }

    render(){
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.newUser}></input>
                <button onClick={this.handleClick}>新增</button>
            </div>
        )
    }
}
//声明要使用的context对象的属性
UserAdd.contextTypes = {
    onAddUser: PropTypes.func
}
export default UserAdd;