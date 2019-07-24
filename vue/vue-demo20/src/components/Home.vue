<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="home">
    我是首页组件
    <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <br>
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是一个home组件",
      input: ''
    };
  }
};
</script>

<style lang="scss" scoped>
</style>