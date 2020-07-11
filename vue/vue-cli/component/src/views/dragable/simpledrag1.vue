<template>
  <div>
    <draggable @start="start" @end="end">
      <p v-for="d in list" :key="d.id">
        {{d.name}}
      </p>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  data() {
    return {
      list: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ]
    }
  },
  methods: {
    start(e) {
      console.log(e)
    },
    end(e) {
      console.log(e)
    }
  }
}
</script>