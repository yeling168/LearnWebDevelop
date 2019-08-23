<template>
  <div id="news">
    我是新闻组件
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      class="list"
    >
      <li v-for="item in list">{{ item }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "我是一个新闻组件",
      list: [],
      j:0,
      loading:false
    };
  },
  methods:{
      loadMore(){
          for(var i=0;i<20;i++,this.j++){
              this.list.push('第'+this.j+'条');
          }
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