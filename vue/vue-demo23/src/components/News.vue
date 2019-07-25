<template>
  <div id="news">
    我是新闻组件 -----{{this.$store.state.count}}
    <hr />
    <button @click="incCount()">增加数量+</button>
    <br />
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
//引入store
import store from "../vuex/store";
export default {
  data() {
    return {
      msg: "我是一个新闻组件",
      list: []
    };
  },
  store,
  methods: {
    incCount() {
      //改变vuex state里面的数据
      console.log(this);
      this.$store.commit("incCount");
    },
    requestData() {
      //请求数据
      //get请求如果跨域的话 后台php java 里面要允许跨域请求
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.get(api).then(
        response => {
          console.log(response);
          this.list = response.body.result;
          //数据放到store里面
          this.$store.commit("addList", response.body.result);
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    //判断store里面有没有数据
    var listData = this.$store.state.list;
    console.log(listData.length);
    if (listData.length > 0) {
      this.list = listData;
    } else {
      this.requestData();
    }
  }
};
</script>