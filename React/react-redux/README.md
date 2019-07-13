This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 安装antd

yarn add antd

### 安装redux

yarn add redux

### 解决No store found. Make sure to follow the instructions.

[https://github.com/zalmoxisus/redux-devtools-extension#usage](https://github.com/zalmoxisus/redux-devtools-extension#usage)

### 深拷贝

[https://blog.csdn.net/ljw1412/article/details/79651725](https://blog.csdn.net/ljw1412/article/details/79651725)

### 总结

运行项目：yarn add

关于store

1.store是唯一的

2.只有store能够改变自己的内容

3.Reducer必须是纯函数

### 核心API

createStore

store.dispatch

store.getState

store.subscribe

### UI组件和容器组件

UI组件负责渲染，容器组件负责逻辑

### 无状态组件

当UI组件只包含render函数，无状态组件就是一个函数

优势:无状态组件性能比普通组件的性能更高，因为它就是一个函数

普通组件是JS里面的类，这个类生成的对象包含了一些生命周期函数还有render，执行的东西远比无状态函数多很多

### 本地模拟服务器

[https://github.com/typicode/json-server](https://github.com/typicode/json-server)

全局安装json-server：npm install -g json-server

在D:\LearnWebDevelop\LearnWebDevelop\React\redux-saga\src新建一个list.json文件，进入到该目录，在cmd命令行输入json-server --watch list.json --port 3004在3004端口监听


### redux-thunk
github地址：[https://github.com/reduxjs/redux-thunk](https://github.com/reduxjs/redux-thunk)

yarn安装：yarn add redux-thunk

可以把复杂请求和逻辑放到action处理

解决工具不能使用（查看高级设置）：[https://github.com/zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)

### dispatch方法

根据参数的不同做不同的事情

如果参数是对象，直接传递给store

如果参数是函数，那在dispatch中将函数执行结束

redux-thunk将dispatch方法升级，原始的redux中dispatch方法只能是一个对象，升级后dispatch既可以接收对象，也可以接受函数

redux-logger可以记录dispatch的传递日志，可以将日志打印在控制台上

redux-thunk将异步操作放到action，redux-saga将异步逻辑拆分出来，放到另一个文件进行管理

### redux-saga

[https://github.com/redux-saga/redux-saga](https://github.com/redux-saga/redux-saga)

redux-saga将异步逻辑拆分出来，放到另一个文件进行管理

saga的文件必须要要求一个文件是generator函数

使用saga，在reducer可以接收action，在sagas.js中也能接收action

### react-redux

github地址:[https://github.com/reduxjs/react-redux](https://github.com/reduxjs/react-redux)
Provider的意思是提供器连接了store，那么Provider里面的所有组件都能获取到store的内容，是通过connect方法获取的


变量和内存理解：值类型和引用类型:
[https://www.bilibili.com/video/av47385883?from=search&seid=1112461780316279928](https://www.bilibili.com/video/av47385883?from=search&seid=1112461780316279928)

### 运行项目

json-server --watch list.json --port 3004

yarn start