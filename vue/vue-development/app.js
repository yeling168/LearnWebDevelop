var list = [

];

new Vue({
  el: ".main",
  data: {
    list: list,
    todo:''
  },
  methods: {
    addTodo() {
      //添加任务
      this.list.push({
        title: this.todo
      });
      this.todo=""
    }
  }
});
