<template>
  <div>
    <h2>我是首页组件</h2>
    <ul>
        <li v-for="(item,key) in list">
          <router-link :to="'/pcontent/?id='+key">{{key}}---{{item}}</router-link>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是一个home组件",
      list: ["商品111", "商品222", "商品333"]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
