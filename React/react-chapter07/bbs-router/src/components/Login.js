import { React, Component } from "react";

class Login extends Component{
    render(){
        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        用户名:
                    </label>
                </div>
            </form>
        )
    }
}

export default Login;