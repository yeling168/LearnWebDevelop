<template>
  <div>
    <v-header :title="title" :homemsg="msg" :run="run" :home="this"></v-header>首页组件
  </div>
</template>
<script>
import Header from "./Header";
export default {
  data() {
    return {
      msg: "我是home组件",
      title: "首页111"
    };
  },
  components: {
    "v-header": Header
  },
  methods: {
    run(data) {
      alert("我是父组件的run方法"+data);
    }
  }
};
</script>
<style lang="scss" scoped>
/* css局部作用域 scoped */
h2 {
  color: red;
}
</style>
