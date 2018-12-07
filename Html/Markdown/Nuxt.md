## Nuxt.js 开启SSR渲染 ##

学习所需知识：HTML+CSS、JavaScript、Vue的基础知识。

## 一、Nuxt.js介绍

### 1、Nuxt.js简介

1.1 Nuxt.js 是一个基于 Vue.js 的通用应用框架;  官网：[https://zh.nuxtjs.org/](https://zh.nuxtjs.org/ "https://zh.nuxtjs.org/")。

1.2 通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI渲染。。

1.3 可以直接用命令把我们制作的vue项目生成为静态html。

### 2、服务器端渲染的好处

2.1. SSR，即服务器渲染，就是在服务器端将对Vue页面进行渲染生成html文件，将html页面传递给浏览器。

2.2. SPA（单页应用）不利于搜索引擎的SEO操作

2.3. SEO 不同于SPA的HTML只有一个无实际内容的HTML和一个app.js，SSR生成的HTML是有内容的，这让搜索引擎能够索引到页面内容。

2.4. 更快内容到达时间 传统的SPA应用是将bundle.js从服务器获取，然后在客户端解析并挂载到dom。而SSR直接将HTML字符串传递给浏览器。大大加快了首屏加载时间。

### 3、Nuxt.js是特点

- 基于 Vue.js
- 自动代码分层
- 服务端渲染
- 强大的路由功能，支持异步数据
- 静态文件服务
- ES6/ES7 语法支持
- 打包和压缩 JS 和 CSS
- HTML头部标签管理
- 本地开发支持热加载
- 集成ESLint
- 支持各种样式预处理器： SASS、LESS、 Stylus等等

##二、Nuxt环境搭建和Hello World

### 1. nuxt.js安装

1.1 Node.js安装（跳过），详情参考《Node.js安装.MD》

1.2 用npm来安装vue-cli (Vue的命令行)

>  npm install vue-cli -g

1.3 使用vue安装 nuxt； 可以使用init命令来初始化Nuxt.js项目。

> vue init nuxt/starter  
> vue init nuxt-community/starter-template <project-name>  
> //会在github上下载模版，然后进行项目初始化。

1.3.1 华为网络因素，通过npm安装nuxt 会失败； 改成从官网直接下载starter-template-master.zip包

1.4. 使用npm install安装依赖包

> npm install

1.5 使用npm run dev 启动服务

>  npm run dev

1.6.在浏览器输入 localhost:3000,可以看到结果。

# Hello World#


##三、Nuxt目录结构详讲

目录结构：

		|-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
		|-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
		|-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
		|-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
		|-- middleware                       // 用于存放中间件
		|-- pages                            // 用于存放写的页面，我们主要的工作区域
		|-- plugins                          // 用于存放JavaScript插件的地方
		|-- static                           // 用于存放静态资源文件，比如图片
		|-- store                            // 用于组织应用的Vuex 状态管理。
		|-- .editorconfig                    // 开发工具格式配置
		|-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
		|-- .gitignore                       // 配置git不上传的文件
		|-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
		|-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
		|-- package.json                     // npm包管理配置文件


##四、Nuxt常用配置项

1. 配置IP和端口：
>
   项目默认IP地址和端口（localhost:3000）    
   想把IP配置成127.0.0.1，端口设置1818。

/package.json

	  "config":{
	    "nuxt":{
	      "host":"127.0.0.1",
	      "port":"1818"
	    }
	  },

2. 配置全局CSS

/assets/css/normailze.css

	html{
	    color:red;
	}


/nuxt.config.js


	css:['~assets/css/normailze.css'],

设置好后，在终端输入npm run dev 。然后你会发现字体已经变成了红色。

3. 配置webpack的loader

在nuxt.config.js里是可以对webpack的基本配置进行覆盖的。


	build: {

	    loaders:[
	      {
	        test:/\.(png|jpe?g|gif|svg)$/,
	        loader:"url-loader",
	        query:{
	          limit:10000,
	          name:'img/[name].[hash].[ext]'
	        }
	      }
	    ],

	    /*
	    ** Run ESLint on save
	    */
	    extend (config, { isDev, isClient }) {
	      if (isDev && isClient) {
	        config.module.rules.push({
	          enforce: 'pre',
	          test: /\.(js|vue)$/,
	          loader: 'eslint-loader',
	          exclude: /(node_modules)/
	        })
	      }
	    }
	  }

##五、Nuxt的路由配置和参数传递

1. 根目录的pages文件下新建两个文件夹，about和news（模仿关于我们和新闻的功能模块）。

about/index.vue：

	<template>
	  <div>
	      <h2>About Index page</h2>
	      <ul>
	        <li><a href="/">Home</a></li>
	      </ul>
	  </div>
	</template>

news/index.vue

	<template>
	  <div>
	      <h2>News Index page</h2>
	       <ul>
	        <li><a href="/">Home</a></li>
	      </ul>
	  </div>
	</template>

修改原来的pages文件夹下的index.vue，删除没用的代码，写入下面链接代码：


	<template>
	  <div>
	    <ul>
	      <li><a href="/">HOME</a></li>
	      <li><a href="/about">ABOUT</a></li>
	      <li><a href="/news">NEWS</a></li>
	    </ul>
	  </div>
	</template>

	<script>

	export default {
	  components: {}
	}
	</script>

	<style></style>


2. <nuxt-link>标签

Nuxt.js不推荐这种`<a>`标签的作法，推荐<nuxt-link>标签（vue中叫组件）。


	<template>
	  <div>
	    <ul>
	      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
	      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
	      <li><nuxt-link :to="{name:'news'}">NEWS</nuxt-link></li>
	    </ul>
	  </div>
	</template>

3. params传递参数
路由经常需要传递参数，使用params来进行传递参数，向新闻页面（news）传递个参数，然后在新闻页面进行简单的接收。

我们先修改pages下的Index.vue文件，给新闻的跳转加上params参数，传递3306ID。


	<template>
	  <div>
	    <ul>
	      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
	      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
	      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li>
	    </ul>
	  </div>
	</template>


在news文件夹下的index.vue里用$route.params.newsId进行接收。

	<template>
	  <div>
	      <h2>News Index page</h2>
	      <p>NewsID:{{$route.params.newsId}}</p>
	       <ul>
	        <li><a href="/">Home</a></li>
	      </ul>
	  </div>
	</template>


##六、Nuxt的动态路由和参数校验

1. 动态路由就是带参数的路由。比如我们现在新闻模块下面有很多新闻详细页，这时候就需要动态路由的帮助了。

news文件夹下面新建了_id.vue的文件，以下画线为前缀的Vue文件就是动态路由，然后在文件里边有 $route.params.id来接收参数。

/pages/news/_id.vue


	<template>
	  <div>
	      <h2>News-Content [{{$route.params.id}}]</h2>
	      <ul>
	        <li><a href="/">Home</a></li>
	      </ul>
	  </div>
	</template>


修改新闻首页路由

我们在/pages/news/index.vue进行修改，增加两个详细页的路由News-1和News-2。


	<template>
	  <div>
	      <h2>News Index page</h2>
	      <p>NewsID:{{$route.params.newsId}}</p>
	       <ul>
	        <li><a href="/">Home</a></li>
	        <li><a href="/news/123">News-1</a></li>
	        <li><a href="/news/456">News-2</a></li>
	      </ul>
	  </div>
	</template>

代码写好后，打开npm run dev 进行查看，我们已经进入了新闻详细页，并在详细页中取得了传递过来的新闻ID。

动态参数校验
进入一个页面，对参数传递的正确性校验是必须的，Nuxt.js也贴心的为我们准备了校验方法validate( )。

/pages/news/_id.vue

	export default {

	  validate ({ params }) {
	    // Must be a number
	    return /^\d+$/.test(params.id)
	  }

	}

我们使用了validate方法，并把params传递进去，然后用正则进行了校验，如果正则返回了true正常进入页面，如果返回false进入404页面。


##七、Nuxt的路由动画效果

1. 全局路由动画
全局动画默认使用page来进行设置，例如现在我们为每个页面都设置一个进入和退出时的渐隐渐现的效果。我们可以先在根目录的assets/css下建立一个main.css文件。

/assets/css/main.css

	.page-enter-active, .page-leave-active {
	    transition: opacity 2s;
	}
	.page-enter, .page-leave-active {
	    opacity: 0;
	}

然后在nuxt.config.js里加入一个全局的css文件就可以了。

    css:['assets/css/main.css'],

在页面切换的时候就会有2秒钟的动画切换效果了。
