<template>
  <!--所有的内容要被根节点包含起来-->
  <div id="home">
    首页组件
    <button @click="getData()">请求数据</button>
    <button @click="getDataWithAxios()">使用Axios</button>
    <hr />
    <br />
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      msg: "我是一个首页组件msg",
      flag: true,
      list: []
    };
  },
  /**
   * 请求数据的模板
   * vue-resource  官方提供的vue的一个插件
   *
   * axios
   *
   * fetch-jsonp
   */

  methods: {
    getData() {
      //请求数据
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.get(api).then(
        response => {
          console.log(response);
          //注意this指向
          this.list = response.body.result;
        },
        function(response) {
          console.log(err);
        }
      );
    },
    getDataWithAxios() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      Axios.get(api)
        .then((response) => {
            console.log(response);
            this.list = response.data.result;
        })
        .catch((error) => {});
    }
  },
  mounted() {
    //this.getData();
    //this.getDataWithAxios();
  }
};
</script>

