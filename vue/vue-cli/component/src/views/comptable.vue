<template>
  <div>
    <compTable :tableHeader="tableHeader" :tableData="tableData" @sort-events="handleSort" @filter-events="filterHandler" @click-events="handleClick">
    </compTable>
  </div>
</template>
<script>
import compTable from '@/components/comptable/comptable'
export default {
  components: { compTable },
  data() {
    return {
      // 数据结构
      tableData: [], // 为请求到的table数据
      tableHeader: [
        // 表头信息，可根据minWidth修改宽度
        {
          prop: 'uid',
          label: '订单号',
          minWidth: '160px'
        },
        {
          prop: 'peopleNumber',
          label: '人数',
          sortable: 'custom',
          minWidth: '75px'
        },
        {
          prop: 'source',
          label: '来源',
          filters: sourceData,
          columnKey: 'sourceList',
          minWidth: '90px',
          render: (h, params) => {
            return h('span', params.row.source)
          }
        }
      ]
    }
  }
}
</script>