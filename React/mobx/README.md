1-1 mobx vs redux

1)开发难度低

2)开发代码量少

3)渲染性能好

mobx的核心思想

状态变化引起的副作用应该被自动触发

2-1 class类定义语法

npm init -y创建一个包含默认内容的package.json

cnpm i webpack webpack-c
li babel-core babel-preset-env babel-loader -D

webpack相关：webpack webpack-c
li

babel相关:babel-core babel-preset-env

webpack和babel的桥梁 babel-loader

为了更方便调用webpack，编写npm script，在start  webpack -w

-w代表监视文件更改，自动执行编译

缺少 @babel/core 模块，安装指定版本模块：npm i babel-loader@7 -D


webpack-dev-server --contentbase src

cnpm install babel-plugin-transform-class-properties@6.24.1

2-2 什么是decorator

Decorator是在声明阶段实现类与类成员注解的一种语法

cnpm install babel-plugin-transform-decorators-legacy@1.3.4 -D