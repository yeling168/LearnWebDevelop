<template>
  <div class="child">
    <ul class="slotTodoChildren">
      <li class="lis" v-for="todo in todoList" v-bind:key="todo.id">
        <!--
            我们为每个 todo 准备了一个插槽，
            将 `todo(todoList里的)` 对象作为一个插槽的 prop 传入。
            -->
        <slot name="todo" :todos="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"slotChildren",
  data: function() {
    return {
      todoList:[
            {
                id:1,            
                text:"扫地"
            },
            {
                id:2,
                text:"做饭"
            },
            {
                id:3,
                text:"擦桌子"
            }
        ]
    };
  },
  computed: {},
  methods: {},
  components: {},
  created(){
        console.log(this.filteredTodos)
    },
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
.slotTodoChildren .lis{
    display: block;
    background: #434534;
    line-height:40px;
    margin-top: 10px;
    color: #fff;
    font-size: 24px;
    height: 40px;
}
</style>
