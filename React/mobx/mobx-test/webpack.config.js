//nodejs的path模块处理路径信息
const path = require("path");

const config = {
  //新的webpack版本需要定义mode属性，代表生产环境或开发环境
  mode: "development",
  //webpack打包的入口文件，当前目录下的src，index.js文件
  entry: path.resolve(__dirname, "src/index.js"),
  //webpack的产出文件
  output: {
    //当前目录下的dist目录，文件设置成main.js
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  //webpack应该如何编译我们的代码
  module: {
    rules: [
      {
        //test匹配所有的文件
        test: /\.js$/,
        //需要忽略node_modules下的文件
        exclude: /node_modules/,
        //定义loader，本次使用babel-loader
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  //方便调试
  devtool: "inline-source-map"
};

//导出
module.exports = config;
