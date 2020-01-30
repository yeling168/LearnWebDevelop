<template>
  <div class="father">
    <base-layout>
      <span>
        <slot>{{ user.lastName }}</slot>
      </span>
    </base-layout>
  </div>
</template>

<script>
import baseLayout from "./baseLayout.vue";
export default {
  data: function() {
    return {
      user:{
        lastName:'aaa'
      }
    };
  },
  components: {
    baseLayout: baseLayout
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
