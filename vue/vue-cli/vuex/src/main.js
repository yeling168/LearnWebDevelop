import Vue from 'vue'
//state
// import store from './state/store';
// import vuex from './state/vuex.vue';

//mutations
// import store from './mutations/store';
// import vuex from './mutations/vuex.vue';

//getters
// import store from './getters/store';
// import vuex from './getters/vuex.vue';

//actions
// import store from './getters/store';
// import vuex from './getters/vuex.vue';

//modules
import store from './getters/store';
import vuex from './getters/vuex.vue';


new Vue({
  el:'#app',
  store,
  render:xx=>xx(vuex)
})