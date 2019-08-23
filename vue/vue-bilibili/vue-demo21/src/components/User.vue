<template>
  <div id="news">
      我是用户组件
      <br>
      <v-actionsheet></v-actionsheet>
  </div>
</template>


<script>
import ActionSheet from './ActionSheet';
export default {
  data() {
    return {
      msg: "我是一个user组件",
      list: []
    };
  },
  components:{
      'v-actionsheet':ActionSheet
  }
};
</script>

<style lang="scss" scoped>
</style>