<template>
  <div class="father">
    <todo-list>
      <template v-slot:todo="slotProps" >
          {{slotProps.user.firstName}}
      </template> 
    </todo-list> 
  </div>
</template>

<script>
import todoList from "./todoList.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    todoList: todoList
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
