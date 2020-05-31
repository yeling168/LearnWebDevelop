<template>
  <div class="home">
    <div>{{ text }}</div>
    <BusOne></BusOne>
    <BusTwo></BusTwo>
  </div>
</template>
<script>
import BusOne from "./bus_1";
import BusTwo from "./bus_2";
export default {
  name: "home",
  data() {
    return {
      text: "home"
    };
  },
  components: { BusOne, BusTwo }
};
</script>
