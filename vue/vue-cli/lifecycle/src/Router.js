import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./app.vue";

const first = {
  template: "<div>first内容</div>"
};

const second = {
  template: "<div>second内容</div>"
};

const Home = {
  template: "<div>Home内容</div>"
};

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/first",
      component: App
    },
    {
      path: "/second",
      component: second
    }
  ]
});

new Vue({
  router,
  template: `
      <div id="r">
          <h1>导航</h1>
          <ul>
              <li><router-link to="/">/</router-link></li>
              <li><router-link to="/first">first</router-link></li>
              <li><router-link to="/second">second</router-link></li>
          </ul>
          <router-view class="sadfj"></router-view>
      </div>
    `,
  beforeCreate: function() {
    //已经被显示出来了
    console.log("1-beforeCreate 初始化之后");
  },
  created: function() {
    console.log("2-created创建完成");
  },
  beforeMount: function() {
    //创建好DOM但没显示出来
    console.log("3-beforeMount挂载之前");
  },
  mounted: function() {
    //DOM被创建好并显示
    console.log("4-mounted被创建");
  },
  beforeUpdate: function() {
    console.log("5-beforeUpdate数据更新前");
  },
  updated: function() {
    console.log("6-updated被更新后");
  },
  //<keep-alive></keep-alive>
  activated: function() {
    console.log("7-actived");
  },
  deactivated: function() {
    console.log("8-deactivated");
  },
  beforeDestroy() {
    console.log("9-beforeDestory销毁之前");
  },
  destroyed: function() {
    console.log("10-destoryed销毁之后");
  }
}).$mount('#app');
