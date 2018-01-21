var vm = new Vue({
    el: '#app',
    data: {
        message: 'Vue.js简单介绍',          //介绍信息
        totalMoney: 0,                     //产品总价格
        productList: [],                   // 产品的数据
        delFlag:false,                     //控制删除显示 
        flag:false,                        //控制全选和取消全选
        curentProdut:''                    //存储删除的商品
    },
    filters:{
      formatMoney:function(params) {
          return "￥"+params.toFixed(2);
      }
    },
    mounted: function () {
        this.$nextTick(function() {
            this.cartView();
        });  
    },
    methods: {
        cartView: function () {                            //获得数据并渲染
            this.$http.get("data/cartData.json").then(res => {
                if(res.body.status==1){
                    this.productList = res.body.result.list;
                }
            },error =>{
               console.log(error.statusText);
            });
        },
        subSum: function (item,number) {                   //点击加减的按钮事件
            if(number>0){
                item.productQuentity++;
            }else{
                item.productQuentity--;
                if(item.productQuentity<1){
                    item.productQuentity=1;
                } 
            }
            this.totalSum();
        },
        chooseProduct: function (params) {                   //单选事件
            if (typeof params.ischecked == "undefined") {
                this.$set(params, "ischecked", true);
            } else {
                if(params.ischecked){
                    this.flag =false; 
                }
                params.ischecked = !params.ischecked;
            }
            var i = 0;
            var length = this.productList.length;
            this.productList.forEach((item, index)=>{       //如列表单选全部选中,那全选按钮选中,否则全选按钮不选中
                if (item.ischecked) {
                    i++;
                    this.flag = i == length ? true : false;
                }
            });
            this.totalSum();
        },
        chooseAll: function (params) {                      //全选和取消全选
            this.flag = params;
            if(this.flag){
               this.productList.forEach(element => {
                 this.$set(element, "ischecked", true);
               });
            }else{
                this.productList.forEach(element => {
                    this.$set(element, "ischecked", false);
                });
            }
            this.totalSum();
        },
        totalSum: function () {                              //计算总价格
            this.totalMoney = 0;
            this.productList.forEach(element => {
                if (element.ischecked) {
                    this.totalMoney += (element.productPrice) * (element.productQuentity);
                }
            });
        },
        delProduct:function(item){                           //显示删除商品的提示信息
            this.curentProdut =item;
            this.delFlag=true;
        },
        moveProdut:function() {                              //删除商品成功
            let index =this.productList.indexOf(this.curentProdut);
            this.productList.splice(index,1);
            this.delFlag =false;
        },
        login:function(params) {
            if(this.totalMoney !=0){
                window.location="address.html";
            }else{
                alert("哥们，不是吧,什么都不买，还想跳转");
            }
        }
    }
});
