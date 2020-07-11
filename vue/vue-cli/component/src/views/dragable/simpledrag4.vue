<!--/*value注入数据源*/-->
<template>
  <div>
    <draggable v-model="list">
      <li v-for="(item, idx) in list" :key="idx">{{ item.name }}</li>
    </draggable>
    <div class="list-group col-md-3">
      <pre> {{ JSON.stringify(this.list, null, 2) }}</pre>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data() {
    return {
      list: [
        {
          name: "aaa",
          id: 1
        },
        {
          name: "bbb",
          id: 2
        }
      ]
    };
  }
};
</script>
