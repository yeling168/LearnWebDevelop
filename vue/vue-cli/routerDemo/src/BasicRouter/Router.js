import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import First from "./first";
import second from "./second";
import Home from "./Home";

const router = new VueRouter({
    mode: "history",
    //当前的本地路径
    base: __dirname,
    routes: [
        { path: "/", component: Home },
        { path: "/first", component: First },
        {
            path: "/second",
            component: second
        }
    ]
});

new Vue({
    router,
    template: `<div id="r">
    <h1>导航</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/first">first</router-link></li>
      <li><router-link to="/second">second</router-link></li>
    </ul>
    <router-view class="sadfg"></router-view>
  </div>`
}).$mount("#app");
