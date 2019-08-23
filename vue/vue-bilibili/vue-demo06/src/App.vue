<template>
  <div id="app">
    <v-home></v-home>
    <br />
    <hr />
    <v-news></v-news>
  </div>
</template>
<script>
import Home from "./components/Home.vue";
import News from "./components/News.vue";
export default {
  data() {
    return {
      msg: "你好vue"
    };
  },
  components: {
    //前面的组件名称不能和html标签一样
    "v-home": Home,
    "v-news": News
  }
};
</script>
