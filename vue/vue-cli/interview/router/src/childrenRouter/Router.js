import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const User = {
  template: `<div class="user">
  <h2>User {{$route.params.id}}</h2>
  <router-view></router-view>
  </div>`
}

const UserHome = {
  template: '<div>Home</div>'
}

const UserProfile = {
  template: '<div>Profile</div>'
}

const UserPosts = {
  template: '<div>Posts</div>'
}
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/user/:id',
    component: User,
    children: [{
        path: '',
        component: UserHome
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }]
})
new Vue({
  router,
  template: `<div>
  <p>
  <router-link to="/user/foo">/user/foo</router-link>
  <router-link to="/user/pro/profile">/user/pro/profile</router-link>
  <router-link to="/user/post/posts">/user/post/posts</router-link>
</p>
<router-view></router-view>
  </div>`
}).$mount('#app')
