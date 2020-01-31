<template>
  <div class="child">
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
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
