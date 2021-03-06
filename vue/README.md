##搭建vue的开发环境

https://cn.vuejs.org/v2/guide/installation.html

1.必须要安装nodejs

2.搭建vue的开发环境。安装vue的脚手架工具  官方命令行工具

npm install --global vue-cli  cnpm install --global vue-cli


3.创建项目 必须cd到对应的一个项目里面

vue init webpack vue-demo01

cd vue-demo01

cnpm install  /npm install  如果创建项目的时候没有报错，这一步可以省略。如果报错了，cd到项目里面运行cnpm install  /npm install

npm run dev

4.另一种创建项目的方式(推荐)

vue init webpack-simple vuedemo02

cd vuedemo02

cnpm install  npm install

npm run dev

双向数据绑定必须在表单元素中使用

[https://github.com/pagekit/vue-resource](https://github.com/pagekit/vue-resource)

##使用vue-resource请求数据的步骤

1.需要安装vue-resource模块，注意加上--save

npm install vue-resource --save   

cnpm install vue-resource --save

2.main.js引入vue-resource

import VueResource from 'vue-resource'

3.Vue.use(VueResource)

4.在组件里面直接使用

this.$http.get(地址).then(function(){})


##axios的使用：

1.安装cnpm install axios --save

2.哪里用哪里引入axios


父组件给子组件传值

1.父组件调用子组件的时候，绑定动态属性

    <v-header :title="title"></v-header>

2.在子组件里面通过props接收父组件传过来的数据


父组件主动获取子组件的数据和方法

1.调用子组件的时候定义一个ref

    <v-header ref="header"></v-header>

2.在父组件里面通过

    this.$refs.header.属性

    this.$refs.header.方法


##配置路由
1.安装

npm install vue-router --save

cnpm install vue-router --save

2.引入并Vue.use(VueRouter) (main.js)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

3.配置路由

1.创建组件，引入组件

2.定义路由

	const routes = [
	  { path: '/foo', component: Foo },
	  { path: '/bar', component: Bar }
	]

3.实例化VueRouter

	const router = new VueRouter({
	  routes // (缩写) 相当于 routes: routes
	})

4.挂载

	const app = new Vue({
	  router
	}).$mount('#app')

##动态路由

1.配置动态路由

routes:[
    //动态路径参数以冒号开头
    {path:'/user/:id',component:User}
]

2.在对应的页面

this.$route.params

##mint-ui

1.安装 cnpm install mint-ui -save

2.引入mint UI的css和插件

	import Mint from 'mint-ui';
	
	Vue.use(Mint);
	
	import 'mint-ui/lib/style.css'


##element UI的使用

1.安装 npm i element-ui -S 

2.引入element UI和插件

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

3.配置file_loader

	{
	   test:/\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
	   loader:'file-loader'
	}

##elementUI按需引入

1.安装 babel-plugin-component

cnpm install babel-plugin-component -D

2.把

	{
	  "presets": [
	    ["env", { "modules": false }],
	    "stage-3"
	  ]
	}

改为

	{
	  "presets": [["env", { "modules": false }]],
	  "plugins": [
	    [
	      "component",
	      {
	        "libraryName": "element-ui",
	        "styleLibraryName": "theme-chalk"
	      }
	    ]
	  ]
	}


##vuex

vuex是专为Vue.js应用程序开发的状态管理模式

1.vuex解决了组件之间同一状态的共享问题(解决了不同组件之间的数据共享)

2.组件里面数据的持久化

小项目不建议使用vuex

