<template>
  <div id="news">
    我是新闻组件
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      class="list"
    >
      <li v-for="item in list">{{ item.title }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "我是一个新闻组件",
      list: [],
      page: 1,
      //若为真，则无限滚动不会被触发
      loading: false
    };
  },
  methods: {
    loadMore() {
      //默认会执行一次
      this.requestData();
    },
    requestData() {
      //请求数据的开关
      this.loading = true;
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" +
        this.page;
      this.$http.get(api).then(
        response => {
          console.log(response);
          this.list = this.list.concat(response.body.result);
          this.page = this.page + 1;
          //判断最后一页是否有数据
          if (response.body.result.length < 20) {
            this.loading = true; //终止请求
          } else {
            this.loading = false; //继续请求
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  li {
    height: 3.4rem;

    line-height: 3.4rem;

    border-bottom: 1px solid #eee;

    font-size: 1.6rem;

    a {
      color: #666;
    }
  }
}
</style>