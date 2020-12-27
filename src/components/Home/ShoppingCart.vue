<template>
 <div>
    <Table :columns="columns" :data="data1" style="margin:0% 5%"></Table>
    <div class="shop">
        <span>全选</span><Checkbox v-model="allselect" style="margin-left:10px" @on-change="getAll()"></Checkbox>
        <button class="shop1" @click="clearCart()">清空购物车</button>
        <button class="shop1" @click="show();clearCart2()">去结算</button>
        <span style="float:right;padding-right:20px" >已选 {{isselect}} 件商品，合计  ${{sum}} 元</span>

    </div>
 </div>
</template>

<script>
 export default {
   name: 'ShoppingCart',
   data () {
     return {
         isselect:0,
         allselect:false,
         sum:0,
         columns:[
            {
                title:'选择',
                key:'choose',
                render:(h,params) =>{
                    return h('checkbox',{
                        props:{
                            value:params.row.isact
                        },
                        on:{
                            'on-change':()=>{
                                params.row.isact = !params.row.isact
                                this.getSum(params.row)
                            }
                        }
                    })
                },
                width:'100px'
             },{
                title:'商品信息',
                key:'info',
                render:(h,params) =>{
                    return h('div',{
                        attrs:{
                            style:'display:flex'
                        }
                    },[
                        h('img',{
                            attrs:{
                                src:require('../../assets/'+(params.row.url)+'.jpg'),
                                style:'width:160px;height:160px;margin:20px 0px;text-align:left'
                            }
                        }),
                        h('span',{
                            attrs:{
                                style:'margin:20% 10px'
                            }
                        },params.row.ban),
                        h('span',{
                            attrs:{
                                style:'margin:20% 10px'
                            }
                        },params.row.type),                        
 
                    ])
                },
                width:'500px'
            },{
                title:'单价',
                key:'prices',
                render:(h,params) => {
                    return h('span',{},'$'+params.row.prices)
                }
            },{
                title:'数量',
                key:'number',
                render:(h,params) => {
                    return h('div',[
                        h('i-button',{
                            on:{
                                click:()=>{
                                    this.btnMinute(params.row)
                                }
                            }
                        },'-'),
                        h('i-input',{
                            props:{
                                 type:'text',
                                 value:params.row.number
                            },
                            attrs:{
                                style:'width:35px'
                            }
                        }),
                        h('i-button',{
                            on:{
                                click:()=>{
                                    this.btnAdd(params.row)
                                }
                            }
                        },'+'),                        
                    ])
                }
            },{
                title:'金额',
                key:'money',
                render:(h,params) => {
                    return h('span',{},'$'+params.row.prices*params.row.number)
                }
            },{
                title:'操作',
                key:'operate',
                render:(h,params) => {
                    return h('a',{
                        on:{
                            click:()=>{
                                this.deleteitem(params.row)
                            }
                        }
                    },'删除')
                }
            }],
         data1:[]
     }
   },
   methods: {
       deleteitem(id){
           const list = JSON.parse(localStorage.getItem("cart"||"[]"))
           const newlist = []
           for (let i = 0; i < list.length; i++) {
               if(list[i].url!=id.url||list[i].type!=id.type||list[i].ban!=id.ban){
                   newlist.push(list[i])
               }
           }
           localStorage.setItem("cart", JSON.stringify(newlist));
           this.data1=JSON.parse(localStorage.getItem("cart") || "[]");
           location.reload();
       },
        getSum(id){
            let i;
            for (i = 0; i < this.data1.length; i++) {
               if(this.data1[i].url==id.url&&this.data1[i].ban==id.ban&&this.data1[i].type==id.type){
                   this.data1[i].isact = !this.data1[i].isact
                   if(this.data1[i].isact == true){
                        this.isselect++
                        this.sum =this.sum + this.data1[i].prices * this.data1[i].number
                    }else{
                        this.allselect = false;
                        this.isselect--
                        this.sum = this.sum - this.data1[i].prices * this.data1[i].number
                    }
                    break;
               }  
            }
            if(this.isselect == this.data1.length){
                this.allselect = true;
            }
        },
        getAll(){
            this.isselect=0;
            this.sum=0;
            for (let i = 0; i < this.data1.length; i++) {
                this.data1[i].isact = this.allselect
            }
            if(this.allselect == true){
                for (let i = 0; i < this.data1.length; i++) {
                    this.isselect++
                    this.sum =this.sum + this.data1[i].prices * this.data1[i].number
                }
            }
            else{
                this.isselect = 0
                this.sum = 0
            }
        },
        clearCart(){
            this.sum=0;
            this.isselect=0;
            this.allselect=false;
            localStorage.removeItem('cart')
            this.data1=JSON.parse(localStorage.getItem("cart") || "[]")
        },
        clearCart2(){
            this.sum=0;
            this.isselect=0;
            this.allselect=false;
            for (let i= 0; i < this.data1.length; i++) {
               if(this.data1[i].isact == true){
                   this.deleteitem(this.data1[i]);
                   i--;
               }  
            }
        },
        btnAdd (id) {
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url==id.url&&this.data1[i].ban==id.ban&&this.data1[i].type==id.type){
                    this.data1[i].number++
                    this.sum = this.sum + this.data1[i].prices
                }   
            }
            localStorage.setItem("cart", JSON.stringify(this.data1));
        },
        btnMinute (id) {
            for (let i = 0; i < this.data1.length; i++) {
                if(this.data1[i].url==id.url&&this.data1[i].ban==id.ban&&this.data1[i].type==id.type){
                    if(this.data1[i].number>1){
                        this.data1[i].number--
                        this.sum = this.sum - this.data1[i].prices;
                    }
                }   
            }
            localStorage.setItem("cart", JSON.stringify(this.data1));
        },
        show(){
            alert("已清空,总共为"+this.sum+"元！！！");
        }
   },
   created(){
       this.isselect=0;
       this.sum=0;
       let cartdata=JSON.parse(localStorage.getItem("cart") || "[]")
       let username=localStorage.getItem("username")
       for (let i = 0; i < cartdata.length; i++) {
           if(cartdata[i].username == username){
               this.data1.push(cartdata[i])
           } 
       }
   }
 }
</script>

<style>
.shop{
   height:50px;
   background:#eee;
   margin:0% 5%;
   line-height:50px;
   font-size:16px;
   text-align:left;
   padding-left:10px;
   margin-top:10px;
}
.shop1{
    height:50px;
    width:100px;
    background:red;
    float:right;
    border:none;
    color:#fff;
}
</style>