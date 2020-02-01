<template>
  <p id="app">
    <component :is="currentView"></component>
    <button @click="changeView('A')">切换到A</button>
    <button @click="changeView('B')">切换到B</button>
    <button @click="changeView('C')">切换到C</button>
  </p>
</template>

<script>
export default {
  data: function() {
    return {
      currentView: "comA"
    };
  },
  methods: {
    changeView: function(data) {
      this.currentView = "com" + data; //动态地改变currentView的值就可以动态挂载组件了。
    }
  },
  components: {
    comA: {
      template: "<p>组件A</p>"
    },
    comB: {
      template: "<p>组件B</p>"
    },
    comC: {
      template: "<p>组件C</p>"
    }
  }
};
</script>

<style scoped>
.father {
  width: 100%;
  background-color: #ccc;
  height: 650px;
}
.tmpl {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 30%;
  margin: 0 auto;
}
.tmpl span {
  border: 1px solid red;
  height: 50px;
  line-height: 50px;
  padding: 10px;
}
</style>
