<template>
  <div id="app">
    <ul>
        <li v-for="(item,index) of list" :key="'info-'+ index">{{item}}--{{message}}</li>
    </ul>
    <p>p1</p>
    <p>p1</p>
    <p>p1</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'this is message',
      list:['aaaa','bbbbbb','ccccc']
    }
  },
  //时刻监测数据message的变化，一但变化就会调该函数
  watch:{
      //message必须和监测的data名字一样
    message:function(){
      console.log('watch','message变了');
    }
  },
  methods:{
    foo:function(){
      console.log('foo','这是初始化方法');
    }
  },
  //created钩子
  created:function(){
    //调用Vue的data
    console.log('created',this.message);
    //调用Vue方法
    this.foo();
    //因为我们是通过v-for循环遍历li，所以created之前挂载阶段还没开始，我无法获取获取li的个数的
    console.log('li数量',document.getElementsByTagName('li').length);
    //直接加载出来的DOM是可以直接获取到的
    console.log('p个数',document.getElementsByTagName('p').length);
    console.log(this.$el);
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
