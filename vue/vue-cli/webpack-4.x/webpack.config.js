const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "./index.js",
  },
  devServer: {
    // 服务器的根目录 Tell the server where to serve content from
    // https://webpack.js.org/configuration/dev-server/#devserver-contentbase
    contentBase: path.join(__dirname, "./src"),
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 8888,
    //指定要使用的主机。默认情况下这是localhost。如果您希望外部可以访问您的服务器，请像下面这样指定
    // host:'0.0.0.0',
    // --------------- 1 热更新 -----------------
    hot: true,
    // 开启gzip压缩
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    //--------------------开启热更新----------------------------------
    new webpack.HotModuleReplacementPlugin(),
    //--------------------开启自动将JS当中文件导入到html----------------------------------
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
