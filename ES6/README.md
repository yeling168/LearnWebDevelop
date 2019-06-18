2-2

express -e .

-e代表ejs模板  .代表当前目录

.babelrc  设置babel编译的配置文件

gulpfile.babel.js 构建脚本使用了ES6的语法，如果文件名称不包含babel，那么执行babel脚本会报错

2-3

引入npm包处理命令行参数

    import yargs from 'yargs';

.argv 表示输入的内容以字符串作为解析

--harmony 在当前目录运行脚本