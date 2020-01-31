<template>
  <div class="father">
    <todo-list v-bind:todos="todolists" >
  <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
      <template slot-scope="slotProps">
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <span v-if="slotProps.todo.isComplete">√</span>
        {{ slotProps.todo.title}}
        </span>
      </template>
</todo-list>
  </div>
</template>

<script>
import todoList from "./todoList.vue";
export default {
  name: "vSlot",
  data: function() {
    return {
      todolists: [
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
  components: {
    todoList: todoList
  },
  methods: {
    
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
