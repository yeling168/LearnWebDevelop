import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const First = { template: "<div>first内容</div>" };
const second = { template: "<div>second内容</div>" };
const Home = { template: "<div>Home内容</div>" };
const firstFirst = { template: "<div>firstfirst内容</div>" };
const firstSecond = { template: "<div>firstsecond内容</div>" };
const ChildrenFirst = {
  template: `<div class="asdf">
          <h2>组件</h2>
          <router-view class='sadfg'></router-view>
      </div>`
};

const router = new VueRouter({
  mode: "history",
  //当前的本地路径
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    {
      path: "/first",
      component: ChildrenFirst,
      children: [
        { path: "/", component: First },
        { path: "first", component: firstFirst },
        { path: "second", component: firstSecond }
      ]
    },
    { path: "/second", component: second }
  ]
});

new Vue({
  router,
  template: `<div id='r'>
    <h1>导航</h1>
    <ol>
        <li>
            <router-link to="/">/</router-link>
        </li>
        <li>
            <router-link to="/first">first</router-link>
        </li>
            <ol>
                <router-link to="/first/first">first</router-link>
            </ol>
            <ol>
                <router-link to="/first/second">second</router-link>
            </ol>
        <li>
            <router-link to="/second">second</router-link>
        </li>
    </ol>
    <router-view class='sadfg'></router-view>
</div>`
}).$mount("#app");
