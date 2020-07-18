<template>
  <div class="customTable">
    <el-table ref="copyContentTable" height="100%" :data="copyContentTableDisplay" border :row-key="defaultCopyTableProps.id" default-expand-all>
      <config-table-col v-for="col in copyContentTableCols" :key="col.prop" :column="col"></config-table-col>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyContentTableDisplay: [],
      // 默认复印列选择框的属性
      defaultCopyTableProps: {
        id: 'plClassId',
        children: 'children',
        parentId: 'parentPlClassId',
        label: '允许上传',
        selected: 'plClassUpLoadFlag', //选中标识字段名称
        halfSelected: 'halfSelected2' //半选样式标识字段名称
      }
    }
  },
  computed: {
    copyContentTableCols() {
      return [
        {
          prop: 'plClassName',
          minWidth: '80',
          label: '病案文档目录'
        },
        {
          minWidth: '60',
          label: '默认复印',
          renderHeader: (h, { column, $index }) => {
            return (
              <div class="selectable">
                <el-checkbox></el-checkbox>
                <span class="selectable-label">{column.label}</span>
              </div>
            )
          },
          customValue: (h, params) => {
            return (
              <div class="selectable">
                <el-checkbox></el-checkbox>
              </div>
            )
          }
        },
        {
          prop: 'operate',
          minWidth: '70',
          label: '操作',
          operate: [
            {
              label: '删除',
              isRed: true,
              type: 2
            }
          ]
        }
      ]
    }
  }
}
</script>