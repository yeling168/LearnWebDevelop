<template>
  <div id="app">
    This Vue2.0生命周期
    <p>TestDate:aaa={{aaa}}</p>
    <p>
      <button @click="add"></button>
    </p>
  </div>
</template>

<script>
import Hello from "./hello.vue";
export default {
  name: "app",
  components: { hello },
  data() {
    return {
      aaa: 2
    };
  },
  methods: {
    add() {
      this.aaa++;
    }
  },
  beforeCreate: function() {
    //已经被显示出来了
    console.log("1-beforeCreate 初始化之后");
  },
  created: function() {
    console.log("2-created创建完成");
  },
  beforeMount: function() {
    //创建好DOM但没显示出来
    console.log("3-beforeMount挂载之前");
  },
  mounted: function() {
    //DOM被创建好并显示
    console.log("4-mounted被创建");
  },
  beforeUpdate: function() {
    console.log("5-beforeUpdate数据更新前");
  },
  updated: function() {
    console.log("6-updated被更新后");
  },
  //<keep-alive></keep-alive>
  activated: function() {
    console.log("7-actived");
  },
  deactivated: function() {
    console.log("8-deactivated");
  },
  beforeDestroy() {
    console.log("9-beforeDestory销毁之前");
  },
  destroyed: function() {
    console.log("10-destoryed销毁之后");
  },
  watch: {
    'aaa': function(newdata, olddata) {
      console.log(olddata + "更改为" + newdata);
    }
  }
};
</script>