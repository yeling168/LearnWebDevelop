import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const User = {
  template: '<div>User {{$route.params.id}}</div>',
  watch: {
    '$route'(to, from) {
      console.log('to', to);
      console.log('from', from)
    }
  }
}
const common = {
  template: '<div>common内容</div>',
  mounted() {
    console.log(this.$route)
  }
}
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    //动态路径参数以冒号开头
    {
      path: '/user/:id',
      component: User
    },
    {
      // 会匹配以 `/user-` 开头的任意路径
      path: '/user-*',
      component: common
    }
  ]
})

new Vue({
  router,
  template: `<div>
  <p>
  <router-link to="/user/foo">/user/foo</router-link>
  <router-link to="/user/bar">/user/bar</router-link>
</p>
<router-view></router-view>
  </div>`
}).$mount('#app')
