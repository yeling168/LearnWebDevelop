import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //监听用户名和密码两个input值的变化
    handleChange(event) {
        console.log(event);
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }
}