<template>
  <el-table-column
    v-if="column.show !== undefined ? column.show : true"
    :prop="column.prop"
    :label="column.label"
    :width="column.width"
    :min-width="column.minWidth"
    :sortable="column.sortable"
    :align="column.align"
    :type="column.type"
    :show-overflow-tooltip="column.showOverflowTooltip"
    :sort-method="column.sortMethod"
    :render-header="column.renderHeader"
    :fixed="column.fixed"
  >
    <template v-if="column.children">
      <config-table-col
        v-for="ccol in column.children"
        :key="ccol.prop"
        :column="ccol"
        @jumpToDetail="jumpToDetail"
      ></config-table-col>
    </template>
    <template slot-scope="scope">
      <custom-value-slot
        v-if="column.customValue"
        :render="column.customValue"
        :row="scope.row"
        :index="scope.$index"
        :column="column"
      ></custom-value-slot>
      <template v-else-if="column.operate">
        <span
          v-for="(operate, index) in column.operate"
          :key="index"
          :class="{ operate: true, red: operate.isRed, disabled: operate.isDisabled }"
          @click.stop="operateClick(operate, scope)"
          :id="scope.row[column.id]"
          >{{ operate.label }}</span
        >
      </template>
      <template
        v-else-if="
          [null, undefined, ''].includes(scope.row[colValue]) ||
            Number(scope.row[`${colValue}Flag`]) == 0
        "
      >
        <span v-if="column.empty !== undefined" :id="scope.row[column.id]">{{ column.empty }}</span>
        <span v-else class="noData" :id="scope.row[column.id]">--</span>
      </template>
      <template v-else>
        <span
          :class="{
            child: column.setChildClass && scope.treeNode && scope.treeNode.level == 1,
            target: colTarget(scope),
            'icon-dataDown': column.upDownFlag && Number(scope.row[colValue]) < 0,
            'icon-dataUp': column.upDownFlag && Number(scope.row[colValue]) > 0,
          }"
          @click.stop="handleTarget(colTarget(scope), scope)"
          :id="scope.row[column.id]"
          >{{
            `${
              column.formatter
                ? column.formatter(scope.row)
                : column.upDownFlag
                ? Math.abs(scope.row[colValue])
                : scope.row[colValue]
            }${column.isRatio && Number(scope.row[colValue]) != 0 ? "%" : ""}`
          }}</span
        >
      </template>
    </template>
  </el-table-column>
</template>
<script>
var customValueSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null,
    },
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index,
    };
    if (data.props.column) params.column = data.props.column;
    return data.props.render(h, params);
  },
};
export default {
  name: "configTableCol",
  components: { customValueSlot },
  computed: {
    colValue() {
      return this.column.value || this.column.prop;
    },
    colTarget() {
      let vm = this;
      return scope => {
        if (vm.column.target === undefined) {
          return false;
        }
        return vm.column.target.constructor.name == "Function"
          ? vm.column.target(scope)
          : vm.column.target;
      };
    },
  },
  props: {
    column: {
      type: Object,
    },
  },
  methods: {
    handleTarget(type, scope) {
      if (type) {
        this.$emit("handleTarget", scope);
      }
    },
    operateClick(operate, scope) {
      this.$emit("operateClick", operate, scope);
    },
  },
};
</script>
