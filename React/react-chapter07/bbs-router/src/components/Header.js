import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    const { username, onLogout, loacation } = this.props;
    return (
      <div className="header">
        <div className="nav">
          <span className="left-link">
            <Link to="/">首页</Link>
          </span>
          {username && username.length > 0 ? (
            <span className="user">
              当前用户：{username}&nbsp;<button onClick={onLogout}>注销</button>
            </span>
          ) : (
            <span className="right-link">
              {/* 导航到登录页Link的to属性的值不是一个字符串，而是一个对象{ pathname: "/login", state: { from: location } }
              对象中的location是当前页面的位置，这样在Login组件执行完登录逻辑后，可以从this.props.location.state中获取上一个页面的location
              然后重定向到上一个页面 */}
              <Link to={{ pathname: "/login", state: { from: location } }}>
                登录
              </Link>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Header;