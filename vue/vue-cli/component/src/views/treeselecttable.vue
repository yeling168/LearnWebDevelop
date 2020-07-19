<template>
  <div class="customTable">
    <el-table ref="copyContentTable" height="100%" :data="copyContentTableDisplay" border :row-key="defaultCopyTableProps.id" default-expand-all>
      <config-table-col v-for="col in copyContentTableCols" :key="col.prop" :column="col"></config-table-col>
    </el-table>
  </div>
</template>
<script>
import { getMinNodeIdList, getDefaultChecked ,getLinearList} from '@/util/objectDisposed'
export default {
  data() {
    return {
      // 复印目的表格数据
      copyContentTableDisplay: [],
      // 复制内容表格默认勾选列的数据
      defaultCheckedList: [],
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
    copyContentSetLinearTable() {
      return getLinearList(this.copyContentTableDisplay, this.defaultCopyTableProps.children);
    },
    // 复制内容表格最小子节点数组,判断勾选
    copyContentSetMinList() {
      return getMinNodeIdList(this.copyContentTableDisplay, this.defaultCopyTableProps.children, this.defaultCopyTableProps.id)
    },
    // 复印目的表头列名称
    copyContentSetSelectAll: {
      get() {
        return this.copyContentTableDisplay.length > 0
      },
      set(flag) {
        return this.handleCheckedAll(flag, this.defaultCopyTableProps, 'defaultCheckedList')
      }
    },
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
                <el-checkbox v-model={this.copyContentSetSelectAll} indeterminate={this.defaultCheckedList.length > 0 && this.defaultCheckedList.length < this.copyContentSetMinList.length}></el-checkbox>
                <span class="selectable-label">{column.label}</span>
              </div>
            )
          },
          customValue: (h, params) => {
            return (
              <div class="selectable">
                <el-checkbox v-model={params.row[this.defaultCopyTableProps.selected]} indeterminate={params.row[this.defaultCopyTableProps.halfSelected]} onChange={this.handleCheckedChange.bind(this, 1, params)}></el-checkbox>
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
  },
  mounted() {
    this.getCopyContentDetail()
  },
  methods: {
    handleCheckedAll(flag, props, checkedListName) {
      if (!this.copyContentSetMinList || this.copyContentSetMinList.length === 0) return;
      this.copyContentSetMinList.forEach(id => {
        const node = this.copyContentSetLinearTable.getIndexById(id, props.id, true);
        const index = this[checkedListName].indexOf(id);
        node[props.selected] = flag;
        if (flag) {
          index === -1 ? this[checkedListName].push(id) : "";
          setSelectAll(flag, node, props, 0, false, this.copyContentSetLinearTable);
        } else {
          index > -1 ? this[checkedListName].splice(index, 1) : "";
          setSelectAll(flag, node, props, 0, false, this.copyContentSetLinearTable);
        }
      });
    },
    getCopyContentDetail() {
      let res = [
        { plClassId: '1', parentPlClassId: null, plClassName: '病案首页', plClassDefaultPrintFlag: null, plClassUpLoadFlag: null, plClassRemakeFlag: null, seqNo: 0, compareNum: 1, children: null, isChoose: false },
        { plClassId: '2', parentPlClassId: null, plClassName: '死亡报告单', plClassDefaultPrintFlag: null, plClassUpLoadFlag: '0', plClassRemakeFlag: '0', seqNo: 0, compareNum: 0, children: null, isChoose: false },
        { plClassId: '3', parentPlClassId: null, plClassName: '入院记录', plClassDefaultPrintFlag: null, plClassUpLoadFlag: '0', plClassRemakeFlag: '0', seqNo: 0, compareNum: 0, children: null, isChoose: false },
        { plClassId: '4', parentPlClassId: null, plClassName: '诊断分析', plClassDefaultPrintFlag: null, plClassUpLoadFlag: '1', plClassRemakeFlag: '0', seqNo: 0, compareNum: 0, children: [{ plClassId: '13', parentPlClassId: '4', plClassName: '出院记录2', plClassDefaultPrintFlag: null, plClassUpLoadFlag: '1', plClassRemakeFlag: '0', seqNo: 0, compareNum: 0, children: [{ plClassId: '12', parentPlClassId: '13', plClassName: '12名称', plClassDefaultPrintFlag: null, plClassUpLoadFlag: '1', plClassRemakeFlag: '0', seqNo: 0, compareNum: 0, children: null, isChoose: false }], isChoose: false }], isChoose: false },
        { plClassId: '5', parentPlClassId: null, plClassName: '测试目录5', plClassDefaultPrintFlag: null, plClassUpLoadFlag: null, plClassRemakeFlag: null, seqNo: 0, compareNum: 0, children: [{ plClassId: '51', parentPlClassId: '5', plClassName: '测试目录51', plClassDefaultPrintFlag: null, plClassUpLoadFlag: null, plClassRemakeFlag: null, seqNo: 0, compareNum: 0, children: null, isChoose: false }], isChoose: false },
        { plClassId: '90', parentPlClassId: null, plClassName: '测试90', plClassDefaultPrintFlag: null, plClassUpLoadFlag: null, plClassRemakeFlag: null, seqNo: 0, compareNum: 0, children: null, isChoose: false }
      ]
      this.copyContentTableDisplay = this.numToBool(res, 'plClassUpLoadFlag')
      // 获取默认勾选
      this.defaultCheckedList = getDefaultChecked(this.copyContentTableDisplay, this.defaultCopyTableProps, true)
    },
    //转换checkBox的显示 1转为true ，0转为false,添加半勾选状态
    numToBool(list, key) {
      for (let row of list) {
        if (row.children) {
          row[this.defaultCopyTableProps.halfSelected] = false //默认选中为全部未选
          row[key] = row[key] === '1' ? true : false
          this.numToBool(row.children, key)
        } else {
          row[this.defaultCopyTableProps.halfSelected] = false //默认选中为全部未选
          row[key] = row[key] === '1' ? true : false
        }
      }
      return list
    }
  }
}
</script>