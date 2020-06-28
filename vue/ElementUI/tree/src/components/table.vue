<template>
  <div class="bg-white px-3" style="margin-top: -1rem;margin-bottom: 0!important;">
    <el-tabs v-model="tabIndex">
      <el-tab-pane :label="tab.name" :key="tabI" v-for="(tab,tabI) in tabbars">
        <el-table border class="mt-3" :data="opinion" style="width: 100%" @filter-change="change" @expand-change="showDetail">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form>
                <el-row :gutter="10" type="flex" justify="space-around">
                  <el-col :span="6" v-for="(item,index) in files" :key="index">
                    <!-- 图片列表 -->
                    <el-image style="width: 100px; height: 100px" :src="item" :preview-src-list="files">
                    </el-image>
                  </el-col>
                </el-row>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="content" :show-overflow-tooltip="true" align="center" label="内容">
          </el-table-column>
          <el-table-column align="center" prop="contact" label="联系方式">
          </el-table-column>
          <el-table-column align="center" prop="score" label="评分">
          </el-table-column>
          <el-table-column align="center" prop="time" label="提交时间">
          </el-table-column>
          <el-table-column align="center" prop="state" label="处理状态" column-key="stat" :filters="deal" :filter-multiple="true">
          </el-table-column>
          <el-table-column align="center" prop="state" label="处理状态" column-key="state" :filters="deal" :filter-multiple="false">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" plain @click="checkItem(scope.row)">已处理</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="height: 60px;"></div>
        <el-footer class="border-top d-flex align-items-center px-0 position-fixed bg-white" style="bottom: 0;left: 200px;right: 0;z-index: 100;">
          <div style="flex: 1;text-align: right;" class="px-2">
            <el-pagination :current-page="tableData[tab.id].page" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData[tab.id].total">
            </el-pagination>
          </div>
        </el-footer>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// https://blog.csdn.net/single_cong/article/details/103374347
// https://www.cnblogs.com/YuKiee/p/9110894.html
// https://blog.csdn.net/zxmin1302/article/details/82911983?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase
// https://www.cnblogs.com/zhoulifeng/p/9900564.html
var _this
export default {
  components: {},
  data() {
    return {
      tabIndex: 0,
      tabbars: [
        {
          id: 0,
          name: '待处理'
        }
      ],
      deal: [
        {
          text: '待处理',
          value: 'W'
        },
        {
          text: '处理完成',
          value: 'A'
        },
        {
          text: '废弃',
          value: 'X'
        }
      ],
      // 表格数据
      tableData: [],
      // 意见反馈
      opinion: [],
      // 文件
      files: [],
      // 默认处理状态
      state: 'W'
    }
  },
  created() {
    // 不懂，前端写的，好像是解决不主动渲染的问题
    _this = this
    for (let li of _this.tabbars) {
      var data = li
      data.page = 1
      data.size = 10
      this.tableData.push(data)
    }
    this.__getData()
  },
  mounted() {},
  methods: {
    // 数目变化
    handleSizeChange(val) {
      _this.tableData[0].size = val
      _this.__getData()
    },
    // 页码变化
    handleCurrentChange(val) {
      _this.tableData[0].page = val
      _this.__getData()
    },
    // 获取数据
    __getData() {
      var data = {
        page: _this.tableData[0].page,
        size: _this.tableData[0].size,
        state: _this.state
      }
      // 调用接口,方法已封装
      this.doPost('opinion/filter', data, res => {
        var list = res.list
        _this.opinion = list
        _this.tableData[0].total = res.total
      })
    },
    // table表头筛选条件触发事件
    change(filters) {
      if (Object.keys(filters)[0] == 'state') {
        // 判断当前是哪一列搜索条件发生变化
        // 处理状态行
        console.log(filters)
        // 下面的state是上面比较的值(最傻逼的地方)
        _this.state = filters.stat[0]
        _this.__getData()
      } else if (Object.keys(filters)[0] == 'stat') {
        // 其他行,作比较
        console.log(Object.keys(filters)[0])
        console.log(filters.stat[0])
      } else {
        console.log('不在统计的列发生筛选条件变化')
      }
    },
    // 表格单列expand触发事件,展示文件信息
    showDetail(item) {
      var fs = item.files.split(',')
      var urls = []
      for (let li in fs) {
        urls.push(_this.$conf.serverFileHost + fs[li])
      }
      _this.files = urls
    },
    // 操作按钮触发事件
    checkItem(item) {
      this.doPost(
        'opinion/deal',
        {
          id: item.id
        },
        res => {
          _this.__getData()
        }
      )
    },
    doPost() {}
  }
}
</script>