import Vue from "vue";
import App from "./App.vue";
//引入公共的css  注意:创建项目的时候必须用scss
import "./assets/css/basic.scss";

//请求数据
import VueResource from "vue-resource";
Vue.use(VueResource);

import VueRouter from "vue-router";
Vue.use(VueRouter);

//1.创建组件
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Content from "./components/Content.vue";
//import Pcontent from "./components/Pcontent.vue";
import User from "./components/User.vue";

import UserAdd from "./components/User/UserAdd.vue";
import Userlist from "./components/User/UserList.vue";

//2.配置路由

const routes = [
  { path: "/home", component: Home },
  { path: "/news", component: News, name: "news" },
  {
    path: "/user",
    component: User,
    childen: [
      {
        path: "useradd",
        component: UserAdd
      },
      {
        path: "userlist",
        component: Userlist
      }
    ]
  },
  { path: "/content/:aid", component: Content } /**动态路由 */,
  { path: "*", redirect: "/home" } /**默认跳转路由 */
];

//实例化VueRouter
const router = new VueRouter({
  mode: "history", //hash模式改为history模式
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

//根组件的模板里面放上<router-view></router-view>
