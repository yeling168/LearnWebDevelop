<template>
  <div>
    <h2>我是头部组件</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "子组件的msg"
    };
  },
  methods: {
    run(){
      alert('我是子组件的run方法')
    }
  },
 
};
</script>

