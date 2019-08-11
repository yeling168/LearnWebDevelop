import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/" },
    //:是绑定的意思
    { path: "/params/:aaa/:bbb" },
    //使用正则
    {path:'/parame-regex/:id(\\d+)'}
  ]
});

new Vue({
  router,
  //必须要有根元素
  template: `<div>
        <h1>Good morning</h1>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/params/111/222">/params/111/222</router-link></li>
            <li><router-link to="/parame-regex/222">/parame-regex/222</router-link></li>
        </ul>
        <p>show</p>
        <pre>
            <code>
            {{$route.params.aaa}}
               {{JSON.stringify($route,null,2)}}
            </code>
        </pre>
    </div>`
}).$mount("#app");
