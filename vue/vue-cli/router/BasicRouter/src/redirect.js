import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const First = { template: "<div>first内容</div>" };
const second = { template: "<div>second内容</div>" };
const Home = { template: "<div>Home内容</div>" };
const firstFirst = {
  template: "<div>firstFirst内容{{$route.params.id}}</div>"
};
const firstSecond = {
  template: "<div>firstSecond内容{{$route.params.id}}</div>"
};
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
  //通过name传递参数到视图
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/first",
      component: ChildrenFirst,
      children: [
        { path: "/", name: "Home-First", component: First },
        { path: "first", name: "Home-First-First", component: firstFirst },
        { path: "second", name: "Home-Second-Second", component: firstSecond },
        { path: "third", redirect: "first" }
      ]
    },
    { path: "/second", name: "Home-Second", component: second },
    { path: "/aaa/:id", component: firstFirst },
    { path: "/bbb/:id", redirect: "/aaa/:id" },
    {
      path: "/ccc/:id",
      redirect: xxxx => {
        const { hash, params, query } = xxxx;
        console.log(xxxx);
        if (params.id == "001") {
          return "/";
        }
      }
    }
  ]
});

new Vue({
  router,
  //方法二，通过v-bind绑定参数，参数必须是对象，第一个参数是接收路由传过来的name属性，第二个参数是params，里面也是对象
  template: `<div id='r'>
    <h1>导航</h1>
    <p>{{$route.name}}</p>
    <ol>
        <li>
            <router-link to="/">/</router-link>
        </li>
        <li>
            <router-link to="/first">first</router-link>
        </li>
            <ol>
                <li>
                    <router-link :to="{name:'Home-First-First',params:{id:123}}">first</router-link>
                </li>
                <li>
                    <router-link :to="{name:'Home-Second-Second',params:{id:321}}">second</router-link>
                </li>
                <li>
                    <router-link to="third">third</router-link>
                </li>       
            </ol>
        <li>
            <router-link to="/second">second</router-link>
        </li>
        <li>
            <router-link to="/aaa/123">aaa</router-link>
        </li>
        <li>
            <router-link to="/aaa/456">bbb</router-link>
        </li>
        <li>
            <router-link to="/ccc/001">ccc</router-link>
        </li>
    </ol>
    <router-view class='sadfg'></router-view>
</div>`
}).$mount("#app");
