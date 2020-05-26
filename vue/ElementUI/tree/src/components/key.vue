<template>
  <div id="key">
    <div>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
      <li v-for="(item) in list" :key="item.id">
        <input type="checkbox"> {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      newId: 3,
      list: [
        { id: 1, name: '李斯' },
        { id: 2, name: '吕不韦' },
        { id: 3, name: '嬴政' }
      ]
    }
  },
  methods: {
    add() {
      this.list.unshift({ id: ++this.newId, name: this.name })
      this.name = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>