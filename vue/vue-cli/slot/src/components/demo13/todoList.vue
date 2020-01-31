<template>
  <div class="child">
    <slot name="todo" :user="user" :test="test">
      {{ user.lastName }}
    </slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        lastName: "Zhang",
        firstName: "yue"
      },
      test: [1, 2, 3, 4]
    };
  },
  computed: {},
  methods: {},
  components: {},
  mounted: function() {}
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
