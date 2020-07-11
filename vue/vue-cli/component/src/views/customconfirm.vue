<template>
  <div class="hello">
    <span @click="handMe()">点击一下</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    handMe() {
      this.$confirm({
        type: "提示",
        msg: "是否删除这条信息？",
        btn: {
          ok: "yes",
          no: "no"
        }
      })
        .then(() => {
          console.log("ok");
        })
        .catch(() => {
          console.log("no");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  font-size: 24px;
}
</style>
