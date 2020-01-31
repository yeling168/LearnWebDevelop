<template>
  <div class="child">
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        <slot v-bind:todo="todo"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "slotChildren",
  props:{
    todos:[Array,Object]
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  created() {
    console.log(this);
  },
  mounted: function() {}
};
// https://blog.csdn.net/weixin_41796631/article/details/83279992
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
