import Vue from "vue";
import store from "./store/index";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//import VueResource from 'vue-resource';
//Vue.use(VueResource);

//less编译文件
require("!style!css!less!./assets/css/main.css");
//动效库
require("!style!css!less!./assets/css/animate.min.css");

//单页模板
import Home from "./page/Home.vue";
import Creat from "./page/Creat.vue";
import CreatSelect from "./page/CreatSelect.vue";
import deal from "./page/deal.vue";
import CreatFinsh from "./page/CreatFinsh.vue";
import CreatSuccess from "./page/CreatSuccess.vue";
import Main from "./page/Main.vue";
import Plan from "./page/Plan.vue";
import ErrorPage from "./page/ErrorPage.vue";

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/Creat", component: Creat },
    { path: "/CreatSelect", component: CreatSelect },
    { path: "/deal", component: deal },
    { path: "/CreatFinsh", component: CreatFinsh },
    { path: "/CreatSuccess", component: CreatSuccess },
    { path: "/Main", component: Main },
    { path: "/Plan", component: Plan },
    { path: "/ErrorPage", component: ErrorPage }
  ]
});

var vm = new Vue({
  router,
  store,
  template: `<div>
    <transition name="fade" mode="out-in">
       <router-view></router-view>
    </transition>
  </div>`,
  data:{
    regksdata:'2016-6-17',
    regreserveday:'30',
    regsex:'0',
    returnNum:0
  },
  beforeCreate:function(){
    //无法寻找到服务器，自动跳转错误页面：ErrorPage
    if(this.$store.state.serverIp==0){
      router.push({
        path:'/ErrorPage'
      })
    }
  }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
