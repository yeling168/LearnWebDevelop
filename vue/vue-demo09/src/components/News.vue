<template>
  <div>
    <div id="news">
      我是新闻组件
      <ul>
        <li v-for="(item,key) in list">
          <router-link :to="'/content/'+key">{{key}}---{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是新闻组件",
      list: ["111", "222", "333"]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
