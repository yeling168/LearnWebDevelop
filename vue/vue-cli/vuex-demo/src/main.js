import Vue from 'vue'
//import App from './App.vue'
// import store from './store'

//state
// import store from './state/store';
// import App from './state/vuex.vue';

//mutations
// import store from './mutations/store';
// import App from './mutations/vuex.vue';

//getters
// import store from './getters/store';
// import App from './getters/vuex.vue';

//actions
// import store from './actions/store';
// import App from './actions/vuex.vue';

//modules
import store from './modules/store';
import App from './modules/vuex.vue';

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
