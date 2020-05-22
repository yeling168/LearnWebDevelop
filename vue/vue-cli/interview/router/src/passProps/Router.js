import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const Hello = {
  template: `<div>
     <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
   </div>`,
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  }
}

function dynamicPropsFn(route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: Hello
  }, {
    path: '/hello/:name',
    component: Hello,
    props: true
  }, {
    path: '/static',
    component: Hello,
    props: {
      name: 'world'
    }
  }, {
    path: '/dynamic/:years',
    component: Hello,
    props: dynamicPropsFn
  }, {
    path: '/attrs',
    component: Hello,
    props: {
      name: 'attrs'
    }
  }]
})

new Vue({
  router,
  template: `
    <div>
      <h1>Route props</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/hello/you">/hello/you</router-link></li>
        <li><router-link to="/static">/static</router-link></li>
        <li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
        <li><router-link to="/attrs">/attrs</router-link></li>
      </ul>
      <router-view class="view" foo="123"></router-view>
    </div>
  `
}).$mount('#app')
