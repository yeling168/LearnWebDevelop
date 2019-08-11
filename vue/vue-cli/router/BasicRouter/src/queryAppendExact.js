import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/users",
      component: users,
      children: [{ path: ":username", name: "user", component: user }]
    }
  ]
});

//如果是params，则router-link需要name
//如果是query，则不需要name
new Vue({
  router,
  template: `
        <div id="r">
            <h1>导航</h1>
            <ol>
                <li><router-link to="/">/<router-link></li>
                <li><router-link to="/first">first<router-link></li>
                <ol>
                    <li><router-link :to="{path:'/users/wos',query:{aaa:'bbb'}}">wos<router-link></li>
                    
                </ol>
            </ol>
            <router-view></router-view>
        </div>
    `
});
