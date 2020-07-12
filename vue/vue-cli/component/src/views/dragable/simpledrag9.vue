<!--/*value注入数据源*/-->
<template>
  <div style="display:inline-block">
    <draggable
      class="list-group"
      :list="list1"
      group="people"
      style="display:inline-block"
    >
      <div
        class="list-group-item"
        v-for="(element, index) in list1"
        :key="index"
      >
        {{ element.name }} {{ index }}
      </div>
    </draggable>
    <draggable
      class="list-group"
      :list="list2"
      group="people"
      style="display:inline-block"
    >
      <div
        class="list-group-item"
        v-for="(element, index) in list2"
        :key="index"
      >
        {{ element.name }} {{ index }}
      </div>
    </draggable>
    <div class="list-group">
      <pre>{{ JSON.stringify(this.list1, null, 2) }}</pre>
    </div>
    <div class="list-group">
      <pre>{{ JSON.stringify(this.list2, null, 2) }}</pre>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data() {
    return {
      list1: [
        {
          id: 1,
          name: "Joao 0"
        },
        {
          id: 2,
          name: "Jean 1"
        }
      ],
      list2: [
        {
          id: 3,
          name: "Jordan 3"
        },
        {
          id: 4,
          name: "John4"
        }
      ]
    };
  }
};
</script>
