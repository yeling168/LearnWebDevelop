ES6 学习站点:[https://babeljs.io/](https://babeljs.io/)

兼容性:[https://kangax.github.io/compat-table/es5/](https://kangax.github.io/compat-table/es5/)

[http://blog.parryqiu.com/2016/08/18/ionic_installation](http://blog.parryqiu.com/2016/08/18/ionic_installation)

Windows中用"ls"命令:[https://blog.csdn.net/qq1987924/article/details/7875994](https://blog.csdn.net/qq1987924/article/details/7875994)

搭建react环境

npm init

cnpm install --save react react-dom babelify babel-preset-react

cnpm install babel-preset-es2015 --save

全局安装webpack:

cnpm install -g webpack

webpack服务器:cnpm install -g webpack-dev-server

新手运行webpack 报错： unknown property 'loaders':[https://segmentfault.com/q/1010000013456976](https://segmentfault.com/q/1010000013456976)

打包:
webpack
web pack --watch
直接运行：
webpack-dev-server


去掉不想关的链接和顶部head，运行webpack-dev-server:webpack-dev-server --contentbase src  访问[localhost:8080](localhost:8080)

热加载:webpack-dev-server --content-base src --inline --hot 访问localhost:8080


react-devtools：[https://github.com/facebook/react-devtools](https://github.com/facebook/react-devtools)

virtual-dom:[https://github.com/Matt-Esch/virtual-dom](https://github.com/Matt-Esch/virtual-dom)

Unicode转码:[http://tool.chinaz.com/tools/unicode.aspx](http://tool.chinaz.com/tools/unicode.aspx)

state是组件内部属性，props是组件外来属性

在子页面中通过调用父页面传递过来的事件props进行组件间的参数传递


8-4：
[https://facebook.github.io/react/docs/reusable-components.html](https://facebook.github.io/react/docs/reusable-components.html)

React-DOM：[http://www.ptbird.cn/react-reactdom-api-reference.html#finddomnode](http://www.ptbird.cn/react-reactdom-api-reference.html#finddomnode)

Refs是访问到组件内部DOM节点唯一可靠的方法。

不要滥用refs

8-6

Mixins用于做组件之间事件的共享

9-4 JSX样式与CSS的互转

css To React:
[https://staxmanade.com/CssToReact/](https://staxmanade.com/CssToReact/)

9-5  UI

material-ui:[https://material-ui.com/](https://material-ui.com/)

Ant Design:[https://ant.design/index-cn](https://ant.design/index-cn)

12-01

图标库：[https://www.iconfinder.com/](https://www.iconfinder.com/)

antd：[https://ant-design.gitee.io/index-cn](https://ant-design.gitee.io/index-cn)

[https://ant.design/index-cn](https://ant.design/index-cn)

12-2 移动端适配

react-responsive:[https://github.com/contra/react-responsive](https://github.com/contra/react-responsive)

13-1 fetch

fetch:[https://github.com/github/fetch](https://github.com/github/fetch)

17-01 HTML to JSX Compiler

[https://magic.reactjs.net/htmltojsx.htm](https://magic.reactjs.net/htmltojsx.htm)