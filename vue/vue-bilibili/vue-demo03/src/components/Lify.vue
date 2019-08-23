<template>
  <!-- 所有的内容要被根节点包含起来-->
  <div id="life">
    生命周期函数的演示 ---{{msg}}
    <button @click="setMsg()">执行方法改变msg</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是一个生命周期函数的组件"
    };
  },
  methods: {
    setMsg() {
      this.msg = "我是改变后的数据";
    }
  },
  //以下两个基本用不上
  beforeCreate() {
    console.log("实例刚刚被创建");
  },
  created() {
    console.log("实例已经创建完成2");
  },
  beforeMount() {
    console.log("模板编译之前3");
  },
  mounted() {
    /**请求数据，操作DOM放在这个里面 */
    console.log("模板编译完成4");
  },
  beforeUpdate() {
    console.log("数据更新之前");
  },
  updated() {
    console.log("数据更新完毕");
  },
  beforeDestroy() {
    /**页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期 */
    console.log("实例销毁之前");
  },
  destroyed() {
    console.log("实例销毁完成");
  }
};
</script>
