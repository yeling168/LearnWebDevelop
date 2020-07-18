<template>
  <div>
    <el-table :data="tableData" size="medium" ref="multipleTable" border fit @sort-change="handleSort" @filter-change="filterHandle" @selection-change="handleSelectionChange">
      <!--多选框-->
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column v-for="(th,key) in tableHeader" min-heigth="46" :key="key" :prop="th.prop" :label="th.label" :fixed="th.fixed" :sortable="th.custon?'custom':false" :filter="th.filters" :column-key="th.columnKey" :filter-value="th.filteredValue" :filter-multiple="th.filterMultiple" :min-width="th.minWidth" align="center">
        <template slot-scope="scope">
          <!--操作按钮-->
          <div v-if="th.operation">
            <el-button v-for="(o,key) in th.operation" :key="key" @click="o.clickFun(scope.row)" style="width:100%" type="text" size="mini">{{o.name}}</el-button>
          </div>
          <!--点击跳转页面-->
          <div v-else-if="th.router">
            <router-link :to="{path:th.router.path,query:{expertFields:scope.row['fieldName']}}">{{scope.row[th.prop]}}</router-link>
          </div>
          <div v-else>
            <!--鼠标滑过显示气泡框-->
            <el-popover v-if="th.describe" popper-class="popover-el-class" placement="bottom" width="200" trigger="hover" :content="scope.row[th.prop]">
              <span class="describe-wrap" slot="reference" style="-webkit-box-orient:vertical">{{scope.row[th.prop]}}</span>
            </el-popover>
            <!--下拉选择框-->
            <el-select v-else-if="th.selected" :disabled="!th.disabled" v-model="scope.row[th.prop]" @change="th.changeFunc" clearable>
              <el-option v-for="(item,index) in th.selected" :value="item.value" :label="item.text" :key="index"></el-option>
            </el-select>
            <!--需要格式化的数据结构-->
            <span v-else>{{scope.row[th.prop]|formatters(th.formatData)}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 自定义内容组件
var exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }
    if (data.props.column) {
      params.column = data.props.column
    }
    return data.props.render(h, params)
  }
}
export default {
  name:'comp-table',
  components:{exSlot},
  props:{
    // 表格数据
    tableData:{
      type:Array,
      default:function() {
        return []
      }
    },
    // 表头数据
    tableHeader:{
      type:Array,
      default:function() {
        return []
      }
    },
    methods:{
      // 排序事件
      handleSort(sort) {
        this.$emit('sort-events',sort)
      },
      // 筛选事件
      filterHandler(filters) {
        this.$emit('filter-events',filters)
      },
      // 某一行被点击
      handleRowClick(row) {
        this.$emit('click-events',row)
      }
    }
  }
}
</script>