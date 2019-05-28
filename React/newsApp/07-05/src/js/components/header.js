import React from "react";
import ReactDOM from "react-dom";

class ComponentHeader extends React.Component {
  render() {
    var userName = "Parry";
    var boolInput = false;
    var unicodeHtml = "IMOOC\u0020LESSON";
    var html = "IMOOC&nbsp;LESSON";
    return (
      <header>
        <h2>页面的主体内容</h2>
        <p>{userName == "" ? "用户还没有登录" : "用户名：" + userName}</p>
        <p>
          <input type="button" value={userName} disabled={boolInput} />
        </p>
        {/*注释*/}
        <p>{unicodeHtml}</p>{/*需要进行 Unicode 的转码*/}

        {/* 全局html，接收html:__html */}
        <p dangerouslySetInnerHTML={{__html:html}}></p>
      </header>
    );
  }
}

export default ComponentHeader;
