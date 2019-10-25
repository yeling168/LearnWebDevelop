var vm=new Vue({
    el:'#app',
    data:{
        productList:[]
    },
    filters:{},
    mounted:function(){
        this.cartView();
    },
    methods:{
        cartView:function(){
            var _this=this;
            this.$http.get("data/cartData.json",{
                "id":123
            }).then(function(res){
                
            })
        }
    }
})