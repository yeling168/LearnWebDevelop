<template>
  <div id="app">
    {{ message }}
    <span v-bind:title="title">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
    <p v-if="seen">现在你看到我了</p>
    <ol>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ol>
    <button v-on:click="reverseMessage">反转消息</button>
    <input v-model="message" />
    <ol>
      <!-- 创建一个 todo-item 组件的实例 -->
      <todo-item></todo-item>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("todo-item", {
  template: "<li>这是个待办项</li>"
});
export default {
  el: "#app",
  data: function() {
    return {
      message: "Hello Vue",
      title: "页面加载于 " + new Date().toLocaleString(),
      seen: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" }
      ]
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style lang="scss">
</style>
