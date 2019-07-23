<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="doAdd($event)" />
    <button @click="doAdd()">+增加</button>
    <br />
    <hr />
    <hr />
    <h2>进行中</h2>
    <ul v-for="(item,key) in list" v-if="!item.checked">
      <input type="checkbox" v-model="item.checked" />
      {{item.title}}
      <button @click="removeData(key)">删除</button>
    </ul>
    <br />
    <h2>已完成</h2>
    <ul v-for="(item,key) in list" v-if="item.checked" class="finish">
      <input type="checkbox" v-model="item.checked" />
      {{item.title}}
      <button @click="removeData(key)">删除</button>
    </ul>
    <button @click="getList()">获取list的值</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo: "",
      list: [
        {
          title: "录取nodejs",
          checked: true
        },
        {
          title: "录制ionic",
          checked: false
        }
      ]
    };
  },
  methods: {
    doAdd(e) {
      /* 获取文本框输入的值
               把文本框的值push到list
               this.list.push(this.todo);
               this.todo=''; */
      if (e.keyCode == 13) {
        this.list.push({
          title: this.todo,
          checked: false
        });
        this.todo='';
      }
    },
    removeData(key) {
      this.list.splice(key, 1);
    },
    getList() {
      console.log(this.list);
    }
  }
};
</script>