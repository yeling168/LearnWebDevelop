<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
  </div>
</template>
<script>
import MHeader from "./components/header";
export default {
  components: {
    MHeader
  }
};
</script>
<style></style>
