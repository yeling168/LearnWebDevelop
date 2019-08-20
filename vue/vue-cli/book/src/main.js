import Vue from 'vue'
// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

import simpleSlot from './demos/simple-slot.vue';
new Vue({
  el: '#app',
  render: h => h(simpleSlot)
})
