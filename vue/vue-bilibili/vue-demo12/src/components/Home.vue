<template>
  <div>
    <h2>我是首页组件</h2>
    <button @click="goNews()">通过js跳转到新闻页面</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是一个home组件"
    };
  },
  methods: {
    goNews() {
      //this.$router.push({path:'news'});
      //this.$router.push({path:'content/495'});
      //this.$router.push({ name: "news", params: { userId: 123 }
      this.$router.push({ name: "news" });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
