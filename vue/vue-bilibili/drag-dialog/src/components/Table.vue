// http://www.czl.mobi/a/qianduankuangjia/Vue/148.html

//https://www.cnblogs.com/zhaotq/p/9786812.html

//https://www.jb51.net/article/151729.htm


<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>-->
    <el-table-column
      v-for="(item,index) in titleList"
      :prop="index.toString()"　
      :label="item"
      :render-header="renderHeader"
    ></el-table-column>
  </el-table>
</template>

  <script>
export default {
  methos: {
    renderHeader(h, { column }) {
      if (column.label.length > 13) {
        return (
          <el-tooltip
            class="item"
            effect="dark"
            content={column.label}
            placement="top"
          >
            <span style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">{column.label}</span>
          </el-tooltip>
        );
      } else {
        return <span>{column.label}</span>;
      }
    }
  },
  data() {
    return {
      titleList: [
        {
          label: "姓名",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          label: "地址",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          label: "日期",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          label: "单位",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>