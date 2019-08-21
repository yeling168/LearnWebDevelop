
<template>
  <div id="app">
    <!-- https://juejin.im/post/5cb0564e5188251acb530087 -->
    <!-- https://juejin.im/post/5cb0564e5188251acb530087 -->
    <!-- 使用包含slot标签属性的子组件 -->
    <my-slot>
      <!-- 属性slot值需要与子组件中slot的name值相匹配 -->
      <p slot="title">{{title}}</p>
      <div slot="content">{{content}}</div>
    </my-slot>
  </div>
</template>
<script type="text/javascript">
import Vue from "vue";
Vue.component("my-slot", {
  template:
    '<div>\
　　 <div class="title"> \
　　　 <slot name="title"></slot> \
　　 </div> \
　　 <div class="content"> \
<slot name="content"></slot> \
　　 </div> \
　 </div>'
});

var vm = new Vue({
　 el : '#app',
　 data : {
　　 title : 'This is a title',
　　 content : 'This is the content'
　 }
});
</script>