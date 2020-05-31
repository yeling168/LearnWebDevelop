import Vue from "vue";
import App from "./App.vue";
//自定义bus
import VueBus from "./components/busA/vue-bus";
//总线
Vue.use(VueBus);

import BusB from "vue-bus";
Vue.use(BusB);

//elementUi的局部使用
// import { Button, Select, Input,Tree,Menu} from 'element-ui';
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Input);
// Vue.use(Tree);
// Vue.use(Menu);
// import 'element-ui/lib/theme-chalk/index.css';

//elementUi的全局使用
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
//引入公共的scss   注意：创建项目的时候必须用scss
import "./assets/css/basic.scss";

// 指令
import "./directives/drag";
//请求数据
import VueResource from "vue-resource";
Vue.use(VueResource);

//配置路由
import VueRouter from "vue-router";

Vue.use(VueRouter);

//1.创建组件
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import User from "./components/User.vue";
import MyTree from "./components/Tree.vue";
import MyNavMenu from "./components/NavMenu.vue";
import MyDialog from "./components/Dialog.vue";
import dragDiv from "./components/dragDiv.vue";
import Key from "./components/key.vue";
import parentDom from "./components/attrs/parentDom";
import BusA from "./components/busA/index.vue";
import busHome from './components/busB/Home.vue'

//2.配置路由   注意：名字
const routes = [{
    path: "/home",
    component: Home
  },
  {
    path: "/news",
    component: News,
    name: "news"
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/mytree",
    component: MyTree
  },
  {
    path: "/navmenu",
    component: MyNavMenu
  },
  {
    path: "/Dialog",
    component: MyDialog
  },
  {
    path: "/dragdiv",
    component: dragDiv
  },
  {
    path: "/Key",
    component: Key
  },
  {
    path: "/parentDom",
    component: parentDom
  },
  {
    path: "/busA",
    component: BusA
  },
  {
    path: "/busHome",
    component: busHome
  },
  {
    path: "*",
    redirect: "/home"
  } /*默认跳转路由*/
];

//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: "history",
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
});

//4、挂载路由
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
//5 <router-view></router-view> 放在 App.vue
