<!--/*value注入数据源*/-->
<template>
  <div>
    <draggable v-model="list" tag="tbody">
      <tr v-for="item in list" :key="item.name">
        <td scope="row">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sport }}</td>
      </tr>
    </draggable>
    <div class="list-group col-md-3">
      <pre>{{ JSON.stringify(this.list, null, 2)}}</pre>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'aaa',
          sport: 'football'
        },
        {
          id: 2,
          name: 'bbb',
          sport: 'baseball'
        }
      ]
    }
  },
  methods: {
    removeAt(idx) {
      this.list = this.list.splice(idx, 1)
    }
  }
}
</script>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
