<template>
  <div>
    <div @click="handle">bus_1</div>
  </div>
</template>
<script>
export default {
  data() {
    return { buss: 56 };
  },
  methods: {
    handle() {
      console.log(this);
      this.$bus.emit("change", this.buss);
    }
  }
};
</script>
