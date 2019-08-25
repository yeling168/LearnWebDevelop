<template>
  <div id="app">
    <input type="text" name="" v-model="message">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  },
  watch:{
    message:function(){
      console.log('watch','message变了');
    }
  },
  methods:{
    init:function(){
      console.log('这是初始化方法');
    }
  },
  //我们在beforeCreate钩子中调用Vue的data和method
  beforeCreate:function(){
    console.log('beforeCreate',this.message);
    this.init();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
