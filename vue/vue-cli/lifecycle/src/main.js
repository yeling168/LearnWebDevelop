import Vue from 'vue'


// import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

//import Router from './Router';

//ssr:https://github.com/youngwind/vue-ssr-demo


import props from './props.vue'

new Vue({
  el: '#app',
  render: h => h(props)
})
