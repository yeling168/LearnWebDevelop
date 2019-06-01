import React from "react";

//var footerCss=require("../../css/footer.css");

class ComponentFooter extends React.Component {
  render() {
    var footerCovertStyle = {
      miniFooter: {
        backgroundColor: "#333333",
        color: "#ffffff",
        paddingLeft: "20px",
        paddingTop: "3px",
        paddingBottom: "3px"
      },
      miniFooter_h1: {
        fontSize: "15px"
      }
    };
    //console.log(footerCss);
    return (
      // <footer class={footerCss.miniFooter}>
      //   <h1>这里是页脚，一般放置版权的一些信息</h1>
      // </footer>
      <footer style={footerCovertStyle.miniFooter}>
        <h1 style={footerCovertStyle.miniFooter_h1}>
          这里是页脚，一般放置版权的一些信息
        </h1>
      </footer>
    );
  }
}

export default ComponentFooter;
