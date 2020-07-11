<!--/*value注入数据源*/-->
<template>
  <div>
    <draggable :list="list" class="list-group" handle=".handle">
      <li
        class="list-group-item"
        v-for="(element, idx) in list"
        :key="element.name"
      >
        <i class="fa fa-align-justify handle"></i>
        <span class="text">{{ element.name }} </span>
        <input type="text" class="form-control" v-model="element.text" />
        <i class="fa fa-times close" @click="removeAt(idx)"></i>
      </li>
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
  },
  methods: {
    removeAt(idx) {
      this.list = this.list.splice(idx, 1);
    }
  }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
