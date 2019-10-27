var vm=new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[]
    },
    filters:{
        formatMoney:function(value){
            return "¥"+value.toFixed(2);
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            this.cartView();
        })
    },
    methods:{
        cartView:function(){
            var _this=this;
            this.$http.get("data/cartData.json",{
                "id":123
            }).then(function(res){
                _this.productList=res.body.result.list;
                _this.totalMoney=res.body.result.totalMoney;
            })
        }
    }
})

Vue.filter("money",function(value,type){
    return "¥"+value.toFixed(2)+type;
})