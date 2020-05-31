<template>
  <div>
    <div>{{ text }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 11
    };
  },
  created() {
    this.$bus.on("change", num => {
      this.text = num;
    });
  },
  destroy() {
    this.$bus.off("change");
  }
};
</script>
