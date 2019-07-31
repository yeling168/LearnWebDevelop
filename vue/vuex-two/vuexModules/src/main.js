import Vue from 'vue'
import store from './store';
import vuex from './vuex.vue'

console.log(store);

new Vue({
  el:'#app',
  store,
  render:xx=>xx(vuex)
})