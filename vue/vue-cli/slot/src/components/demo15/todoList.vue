<template>
  <div class="child">
    <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
        <slot name="todo" v-bind:todo="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "slotChildren",
  data: function() {
    return {
      filteredTodos: [
        {
          id: 1,
          title: "Do the dishes",
          isComplete: true
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  components: {},
  created() {
    console.log(this.filteredTodos);
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
