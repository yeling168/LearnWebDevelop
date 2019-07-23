import Vue from "vue";
//import App from './App.vue'
//import todoList from './todoList.vue';
//import storage from './storage.vue';
//import component from './component.vue';
import Resource from "./components/resource.vue";

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// new Vue({
//   el: '#app',
//   render: h => h(todoList)
// })

// new Vue({
//   el: '#app',
//   render: h => h(storage)
// })

// new Vue({
//   el: '#app',
//   render: h => h(component)
// })

new Vue({
  el: "#app",
  render: h => h(Resource)
});
