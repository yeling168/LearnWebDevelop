import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//1.创建组件
import Home from "./components/Home.vue";
import News from "./components/News.vue";

//2.配置路由

const routes = [
  { path: "/home", component: Home },
  { path: "/news", component: News }
];

//实例化VueRouter
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

//根组件的模板里面放上<router-view></router-view>
