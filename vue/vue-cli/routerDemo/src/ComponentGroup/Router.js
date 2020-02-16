import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const First = { template: "<div>first内容</div>" };
const Second = { template: "<div>second内容</div>" };
const Home = { template: "<div>Home内容</div>" };
const hehe = { template: "<div>hehe</div>" };

const router = new VueRouter({
  mode: "history",
  //当前的本地路径
  base: __dirname,
  //通过name传递参数到视图
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        left: First,
        right: Second
      }
    },
    {
      path: "/first",
      components: {
        default: hehe,
        left: First,
        right: Second
      }
    }
  ]
});

new Vue({
  router,
  template: `<div id='r'>
    <h1>导航</h1>
    <p>{{$route.name}}</p>
    <ol>
        <li>
            <router-link to="/">/</router-link>
        </li>
        <li>
            <router-link to="/first">/first</router-link>
        </li>
    </ol>
    <router-view class='sadfg'></router-view>
    <router-view class='sadfg' name="left" style="float:left;width:50%;background-color:#ff6600;height:300px"></router-view>
    <router-view class='sadfg' name="right" style="float:left;width:50%;background-color:#fff600;height:300px"></router-view>
</div>`
}).$mount("#app");
