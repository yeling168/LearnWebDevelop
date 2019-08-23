<template>
  <div id="news">
    我是新闻组件   -----{{this.$store.state.count}}
    <hr>
    <button @click="incCount()">增加数量+</button>
  </div>
</template>
<script>
//引入store
import store from '../vuex/store';
export default {
  data() {
    return {
      msg: "我是一个新闻组件",
    };
  },
  store,
  methods: {
    incCount() {
      //改变vuex state里面的数据
      console.log(this);
      this.$store.commit('incCount');
    }
  }
};
</script>