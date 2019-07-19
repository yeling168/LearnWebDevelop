var list = [

];

new Vue({
  el: ".main",
  data: {
    list: list,
    todo:''
  },
  methods: {
    addTodo(data,ev) {
      //添加任务
      console.log(ev);
      this.list.push({
        title: this.todo
      });
      this.todo=""
    }
  }
});
