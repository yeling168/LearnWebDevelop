var list = [
  {
    title: "吃饭打豆豆",
    isChecked: false//状态为false，为不选中
  },
  {
    title: "吃饭打豆豆",
    isChecked: true  //状态为true为选中
  }
];

new Vue({
  el: ".main",
  data: {
    list: list,
    todo: ""
  },
  methods: {
    addTodo() {
      //添加任务
      this.list.push({
        title: this.todo,
        isChecked:false
      });
      this.todo = "";
    },
    deleteTodo(todo){
      //删除任务
      var index=this.list.indexOf(todo);
      this.list.splice(index,1);
    }
  }
});
