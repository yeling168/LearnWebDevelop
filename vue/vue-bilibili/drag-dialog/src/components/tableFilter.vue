<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      border`在这里插入代码片` >
      <el-table-column
        v-for="(kpidata, index) in kpiDataListMap"
        :render-header="renderHeaderOne"
        :key="index"
        :prop="kpidata.propName"
        :label="kpidata.labelName"
        show-overflow-tooltip
        sortable="true"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**弹出框的过滤值**/
      popoverData: "",
      /**table的列名称汉语及英语*/
      kpiDataListMap: [
        {
          propName: "date",
          labelName: "日期"
        },
        {
          propName: "name",
          labelName: "姓名"
        },
        {
          propName: "address",
          labelName: "地址"
        }
      ],
      /**绑定的数据Json*/
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ]
    };
  },
  /**data和method直接使用逗号隔开**/
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      debugger;
      const property = column["property"];
      return row[property] === value;
    },

    renderHeaderOne(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, column.label),
        h(
          "el-popover",
          { props: { placement: "top-start", width: "200", trigger: "hover" } },
          [
            h("i", { slot: "reference", class: "el-icon-question" }, ""),
            h("div", {}, [h("input", { width: "200" }, "")]),
            h("div", { style: "text-align: right; margin: 0" }, [
              h(
                "button",
                {
                  type: "primary",
                  size: "mini",
                  on: {
                    click: () => {
                      //点击确认按钮的事件
                      alert("确定");
                      console.log(`${column.label}   ${$index}`);
                    }
                  }
                },
                "确定"
              ),
              h("span", {}, "          "),
              h(
                "button",
                {
                  size: "mini",
                  on: {
                    click: () => {
                      //点击取消按钮的事件
                      alert("取消");
                      console.log(`${column.label}   ${$index}`);
                    }
                  }
                },
                "取消"
              )
            ])
          ]
        )
      ]);
    }
  }
};
</script>
