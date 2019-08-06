<template>
  <div id="tree">
    <p>Basic:</p>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
        disabled: function(data, node) {
          console.log("data", data);
          //console.log(node);
          // if(data.label==='三级 1-1-1'){
          //   return true;
          // }
        }
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      //console.log(data);
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 16px;
  border: 1px solid red;
  background-color: lightgray;
}
</style>