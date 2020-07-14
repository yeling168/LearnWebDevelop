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