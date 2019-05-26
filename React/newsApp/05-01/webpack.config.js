var webpack = require("webpack");
var path = require("path");

module.exports = {
  //整个项目的目录
  context: __dirname + "/src",
  //入口文件
  entry: "./js/index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        //使用babel-loader解析
        loader: "babel-loader",
        //加载react，es2015包
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  output: {
    //在src下输出bundle.js
    path: __dirname + "/src/",
    filename: "bundle.js"
  },
  //设置环境
  mode: "development"
};
