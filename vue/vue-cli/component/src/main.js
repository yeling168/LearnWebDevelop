// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AlleyUI from './components'
import router from './router'
import $ from 'jquery'
Vue.use(AlleyUI)

// 全局confirm弹框
import theConfirm  from './components/confirm/confirm'
Vue.prototype.$confirm = theConfirm ;

// css
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/less/font-awesome.less";

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入代码展示器
import rawDisplayer from './views/rawdisplayer/rawdisplayer.vue';
Vue.component("rawDisplayer", rawDisplayer);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
