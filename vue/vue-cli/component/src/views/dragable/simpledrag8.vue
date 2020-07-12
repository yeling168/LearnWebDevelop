<!--/*value注入数据源*/-->
<template>
  <div>
    <draggable
      tag="el-collapse"
      :list="list"
      :component-data="collapseComponentData"
    >
      <el-collapse-item
        v-for="item in list"
        :key="item.id"
        :title="item.title"
        :name="item.id"
      >
        <div v-for="(lign, idx) in item.text" :key="idx">{{ lign }}</div>
      </el-collapse-item>
    </draggable>
    <div class="list-group col-md-3">
      <pre>{{ JSON.stringify(this.list, null, 2) }}</pre>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "third-party",
  display: "Third party",
  order: 10,
  components: { draggable },
  data() {
    return {
      list: [
        {
          title: "Consistency",
          id: 1,
          text: [
            "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
            "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
          ]
        },
        {
          title: "Feedback",
          id: 2,
          text: [
            "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;",
            "Visual feedback: reflect current state by updating or rearranging elements of the page."
          ]
        }
      ],
      activeNames: [1],
      collapseComponentData: {
        on: {
          change: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      }
    };
  },
  methods: {
    inputChanged(val) {
      this.activeNames = val;
    }
  }
};
</script>
