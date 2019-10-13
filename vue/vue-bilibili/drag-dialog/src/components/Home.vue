<template>
  <!-- 所有的内容要被根节点包含起来 -->
  <div id="home">
    我是首页组件
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <br />

    <i style="font-size:40px;" class="el-icon-menu"></i>

    <el-rate v-model="value1"></el-rate>
    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center v-dialogDrag>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import '../directives/drag';
export default {
  data() {
    return {
      msg: "我是一个home组件",
      value1: null,
      centerDialogVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
</style>