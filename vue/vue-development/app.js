//存取localstorage中的数据

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
/* var list = [
  {
    title: "吃饭打豆豆",
    isChecked: false //状态为false，为不选中
  },
  {
    title: "妙味课堂",
    isChecked: true //状态为true为选中
  }
]; */
store.save("miaov-new-class", [
  { title: "tty", isChecked: true },
  { title: "tty", isChecked: false }
]);
var list = store.fetch("miaov-new-class");

//过滤的时候有三种情况 all finished undefined

var filter = {
  all: function(list) {
    return list;
  },
  finished: function(list) {
    return list.filter(function(item) {
      return item.isChecked;
    });
  },
  unfinished: function() {
    return list.filter(function(item) {
      return !item.isChecked;
    });
  }
};

var vm = new Vue({
  el: ".main",
  data: {
    list: list,
    todo: "",
    edtorTodos: "", //记录正在编辑的数据
    beforeTitle: "", //记录正在编辑的数据的title
    visibility: "all" //通过这个属性值的变化对数据进行筛选
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
    },
    filteredList: function() {
      //找到了过滤函数，就返回过滤后的数据:如果没有返回所有数据
      return filter[this.visibility] ? filter[this.visibility](list) : list;
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
      //编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新赋值给之前的title
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
      //el指令绑定的当前函数
      //bindling是一个对象
      update(el, binding) {
        console.log(el);
        console.log(binding);
        if (binding.value) {
          el.focus();
        }
      }
    }
  }
});

function watchHashChange() {
  var hash = window.location.hash.slice(1);

  vm.visibility = hash;
}

watchHashChange();

window.addEventListener("hashchange", watchHashChange);
