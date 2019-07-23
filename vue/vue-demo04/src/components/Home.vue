<template>
  <div>
    <v-header></v-header>
    <hr>
    <!-- <h2>这是一个首页组件</h2>
    <button @click="run()">执行run方法</button> -->
    <v-life v-if='flag'></v-life>
    <br>
    <button @click='flag=!flag'>挂载/卸载组件</button>
  </div>
</template>
<script>
import Header from './Header.vue';
import Life from './Lify';
export default {
  data() {
    return {
      msg: "我是一个首页组件",
      flag:true
    };
  },
  methods: {
    run() {
      alert(this.msg);
    }
  },
  components:{
    'v-header':Header,
    'v-life':Life
  }
};
</script>
<style lang="scss" scoped>
/* css局部作用域 scoped */
h2 {
  color: red;
}
</style>
