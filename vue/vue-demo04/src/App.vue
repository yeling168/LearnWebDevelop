<template>
  <!-- 所有的组件要被一个根节点包含起来 -->
  <div id="app">
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg" />
    <button v-on:click="getMsg()">获取表单里面的数据get</button>
    <button v-on:click="setMsg()">设置表单里面的数据set</button>
    <br />
    <hr />
    <input type="text" ref="userinfo" />
    <div ref="box">box</div>
    <button v-on:click="getInputValue()">获取第二个表单里面的数据</button>
    <br />
    <hr />
    <button v-on:click="run1">执行事件的第一种写法</button>
    <br />
    <hr />
    <button @click="run2">执行事件的第一种写法</button>
    <br />
    <hr />
  </div>
</template>

<script>
export default {
  name: "app",
  //data：业务逻辑里面定义的数据
  data() {
    return {
      msg: "你好vue"
    };
  },
  methods: {
    getMsg() {
      //console.log(this);
      alert(this.msg);
    },
    setMsg() {
      this.msg = "我是改变后的数据";
    },
    getInputValue() {
      console.log(this);
      this.$refs.box.style.background = "red";
      //获取ref定义的DOM节点
      alert(this.$refs.userinfo.value);
    },
    run1() {
      alert("这是一个方法");
    },
    run2() {
      alert("这是一个方法");
    }
  }
};
</script>
