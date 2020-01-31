<template>
  <div class="child">
    <span>
      <slot v-bind:user="user">{{ user.lastName }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        lastName: "ccc"
      }
    };
  },
  computed: {},
  methods: {},
  components: {},
  mounted: function() {
    console.log(this);
  }
};
</script>

<style scoped>
.child {
  background-color: #00bbff;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
