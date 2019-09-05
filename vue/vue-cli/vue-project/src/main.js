import Vue from 'vue'
import App from './App.vue';

require('./assets/css/base.css');//全局引入

new Vue({
  el: '#app',
  render: h => h(App)
})
