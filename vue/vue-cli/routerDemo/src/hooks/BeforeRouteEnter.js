import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Home = {
  template: `<div>
        <h2>Home</h2>
        <p>This is Home</p>
    </div>`
};

const Parent = {
  template: `<div>
       <h2>Parent</h2>
       <p>This is Parent</p>
    </div>`
};

const Page404 = {
  template: `<div>
        <h2>error:404</h2>
    </div>`,
  beforeRouteEnter: (to, from, next) => {
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log(to);
    console.log(from);
    next();
  }
};

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    {
      path: "/Parent",
      component: Parent,
      beforeEnter(to, from, next) {
        //next();//可以执行
        //next(false);//不可以执行
        next({ path: "alldjfbf" }); //去找404
      }
    },
    //404必须放在路由(routers)的最后一个
    { path: "*", component: Page404 }
  ]
});

new Vue({
  router,
  data() {
    return {
      aaa: "fade"
    };
  },
  template: `
        <div id="app">
           <h1>This is Transition</h1>
           <ul>
               <li>
                 <router-link to="/">/</router-link>
               </li>
               <li>
                 <router-link to="/Parent">/Parent</router-link>
               </li>
               <li>
                 <router-link to="/asdfghjkh">Where not here</router-link>
               </li>
           </ul>
           <transition :name="aaa" mode="out-in">
              <router-view></router-view>
           </transition>
        </div>
    `,
  watch: {
    $route: function(to /**原始的状态 */, from /**现在的状态 */) {
      // console.log('to',to);
      // console.log('from',from);
      if (from.path == "/Parent") {
        this.aaa = "fade1";
      } else {
        this.aaa = "fade2";
      }
    }
  }
}).$mount("#app");
