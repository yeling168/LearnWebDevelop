<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) of list" :key="'info-'+ index">{{item}}--{{message}}</li>
    </ul>
    <p>p1</p>
    <p>p1</p>
    <p>p1</p>
    <button @click="changeMsg()">change</button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "this is message",
      list: ["aaaa", "bbbbbb", "ccccc"]
    };
  },
  //时刻监测数据message的变化，一但变化就会调该函数
  watch: {
    //message必须和监测的data名字一样
    message: function() {
      console.log("watch", "message变了");
    }
  },
  methods: {
    foo: function() {
      console.log("foo", "这是初始化方法");
    },
    changeMsg() {
      this.message = 'I am new message.'
    }
  },
  //beforeCreate钩子
  beforeCreate: function() {
    console.group("beforeCreate状态");
    console.log("beforeCreate", this.message);
    this.init();
  },
  //created钩子
  created: function() {
    //调用Vue的data
    console.group("created状态");
    console.log("created", this.message);
    //调用Vue方法
    this.foo();
    //因为我们是通过v-for循环遍历li，所以created之前挂载阶段还没开始，我无法获取获取li的个数的
    console.log("created-li数量", document.getElementsByTagName("li").length);
    //直接加载出来的DOM是可以直接获取到的
    console.log("created-p个数", document.getElementsByTagName("p").length);
    console.log("created", this.$el);
  },
  //beforeMount钩子
  beforeMount: function() {
    console.group("beforeMount状态");
    console.log("beforeMounted", this.message);
    this.foo();
    console.log(
      "beforeMounted-li数量",
      document.getElementsByTagName("li").length
    );
    console.log(
      "beforeMounted-p个数",
      document.getElementsByTagName("p").length
    );
    console.log("beforeMount", this.$el);
  },
  //mounted钩子
  mounted: function() {
    console.group("mounted状态");
    console.log("beforeMounted", this.message);
    this.foo();
    console.log(
      "mounted-li数量",
      document.getElementsByTagName("li").length
    );
    console.log(
      "mounted-p个数",
      document.getElementsByTagName("p").length
    );
    console.log("mounted", this.$el);
  },
  //beforeUpdate钩子
  beforeUpdate: function() {
    console.group("beforeUpdate状态");
    console.log("beforeUpdate", this.$data);
    this.foo();
    console.log(
      "beforeUpdate-li数量",
      document.getElementsByTagName("li").length
    );
    console.log(
      "beforeUpdate-p个数",
      document.getElementsByTagName("p").length
    );
    console.log("beforeUpdate", this.$el);
  },
  //beforeUpdate钩子
  updated: function() {
    console.group("updated状态");
    console.log("updated", this.$data);
    this.foo();
    console.log(
      "updated-li数量",
      document.getElementsByTagName("li").length
    );
    console.log(
      "updated-p个数",
      document.getElementsByTagName("p").length
    );
    console.log("updated", this.$el);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
