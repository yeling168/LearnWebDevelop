//存取localStorage中的数据
var store = {
  save(key, value) {
    //list是数组，需要转成JSON字符串
    localStorage.setItem(key, JSON.stringify(value));
  },
  fetch(key) {
    //localStorage.getItem(key)返回的是字符串
    return JSON.parse(localStorage.getItem(key)) || [];
  }
};

// var list = [
//   {
//     title: "吃饭打豆豆",
//     isChecked: false //状态为false，为不选中  任务未完成
//   },
//   {
//     title: "妙味课堂",
//     isChecked: true //状态为true，为选中    任务完成
//   }
// ];
store.save("miaov-new-class", [
    { title: "吃饭打豆豆", isChecked: true },
    { title: "妙味课堂", isChecked: false }
  ]);
var list = store.fetch("miaov-new-class");

new Vue({
  el: ".main",
  data: {
    list: list,
    todo: "",
    edtorTodos: "", //记录正在编辑的数据
    beforeTitle: "" //记录正在编辑的数据的title
  },
  watch: {
    //监控list,list发生变化时，就会执行函数
    // list: function() {
    //   store.save("miaov-new-class",this.list);
    // },

    //对list深度监控
    list: {
      //list发生变化时，执行以下函数
      handler: function() {
        store.save("miaov-new-class", this.list);
      },
      deep: true
    }
  },
  computed: {
    noCheckeLength: function() {
      return this.list.filter(function(item) {
        return !item.isChecked;
      }).length;
    }
  },
  methods: {
    addTodo() {
      //添加任务
      this.list.push({
        title: this.todo,
        isChecked: false
      });
      this.todo = "";
    },
    deleteTodo(todo) {
      //删除任务
      var index = this.list.indexOf(todo);
      this.list.splice(index, 1);
    },
    edtorTodo(todo) {
      //编辑任务
      console.log(todo);
      //编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
      this.beforeTitle = todo.title;
      this.edtorTodos = todo;
    },
    edtorTodoed(todo) {
      //编辑任务成功
      this.edtorTodos = "";
    },
    cancelTodo(todo) {
      //取消编辑任务
      todo.title = this.beforeTitle;
      this.beforeTitle = "";
      //让div显示出来，input隐藏
      this.edtorTodos = "";
    }
  },
  directives: {
    foucs: {
      update(el, binding) {
        console.log("el", el);
        console.log("blnding", binding);
        if (binding.value) {
          el.focus();
        }
      }
    }
  }
});
