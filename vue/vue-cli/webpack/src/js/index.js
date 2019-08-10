var Vue=require('vue');
var App=require("./app.vue");

new Vue({
    el:'#main',
    render:x=>x(App)
})