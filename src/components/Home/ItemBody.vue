<template>
<div>
 <div class="zong">
   <div style="width:400px;height:400px">
     <pic-zoom :url="require('../../assets/'+(this.$route.query.num)+'.jpg')" :scale="3" :scroll="true" class="picture"></pic-zoom>
   </div>
     <div class="fen1">
        <h2>{{itemdesc}}</h2>
        <div class="fen2">
            <div>
              <span>产品活动:</span>
              <span class="sh1">{{itemDiscount}}</span>
            </div>
            <div>
              <span>活动价: </span>
              <span class="sh2">${{itemPrice}}</span>
            </div>
            <div>
              <span>原价: </span>
              <span class="sh3">${{itemFullPrice}}</span>
            </div>
        </div>
        <div style="display:flex;padding-top:15px;">
           <span>配送至: </span>
           <v-distpicker province="江苏省" city="苏州市" area="常熟市" style="height:50px"></v-distpicker>
        </div>
        <div class="fen3">
          <Row>
            <Col span="8">月销量：{{sales}} </Col>
            <Col span="8">累计销量：{{fullSales}} </Col>
            <Col span="8">累计评价：{{fullPL}} </Col>
          </Row>
        </div>
        <div style="display:flex;font-size:16px;margin:10px 0px">
            <div style="margin-top:5px">版本：</div>
            <RadioGroup style="display:flex" v-model="itemBan">
                <div v-for="(shop,i) in banlist" :key="i">
                  <Radio :label="shop.name" border ></Radio>
                </div>
            </RadioGroup>
          </div>
          <div style="display:flex;font-size:16px;margin:10px 0px" > 
            <div  style="margin-top:5px">类型：</div>
            <RadioGroup style="display:flex" v-model="itemType">
                <div v-for="(shop,i) in typelist" :key="i">
                  <Radio :label="shop.name" border ></Radio>
                </div>
            </RadioGroup>
          </div>
          <div style="display:flex;font-size:16px;margin:10px 0px 30px 0px">
            <div style="margin-top:5px">数量：</div>
            <div style="display:flex">
              <Button @click="btnMinute">-</Button>
              <Input type="text" value="0"  v-model="count" style="width:35px;"/>
              <Button @click="btnAdd">+</Button>
            </div>
          </div>
          <button class="gou">立即购买</button>
          <button class="jia" @click="addItem()">加入购物车</button>
     </div>  
 </div>
 <div style="clear:both"></div>
 <Divider></Divider>
 <div style="display:flex;text-align:left;margin-left:100px">
   <HotItem v-bind:tui="this.$route.query.num"></HotItem>
    <Tabs class="zui">
        <TabPane label="宝贝详情" name="name1">
          <div v-for="(shop,i) in imglist" :key="i" style="margin:0;padding:0">
            <img :src="require('../../assets/'+shop.imgid+'.jpg')" alt="" >
          </div>
        </TabPane>
    </Tabs>
 </div>
</div>
</template>
<script>
import PicZoom from 'vue-piczoom'
import axios from 'axios'
import HotItem from './HotItem.vue'
 export default {
   name: 'ItemBody',
   props: {
   },
   components: {
      HotItem,
      PicZoom
   },
   data () {
     return {
       itemdesc:'',
       itemDiscount :'',
       itemPrice:'',
       itemFullPrice:'',
       itemBan:'',
       itemType:'',
       sales:'',
       fullSales:'',
       fullPL:'',
       count:1,
       stock:999,
       banlist:[],
       typelist:[],
       imglist:[],
       gg:"101"
     }
   },
   methods: {
     btnAdd () {
      this.count++
      },
     btnMinute () {
       if(this.count>1){
        this.count--
       }
      },
      addItem(){
        if(this.itemBan==''||this.itemType==''){
            alert("请选择完全！！！！");
        }
        else{
        if(this.itemdesc != '暂无数据'){
          var templist = JSON.parse(localStorage.getItem("cart") || "[]");
          var username = localStorage.getItem("username")
          var flag = 1
          const item = {
            'url':this.$route.query.num,
            'desc':this.itemdesc,
            'prices':this.itemPrice,
            'number':this.count,
            'ban':this.itemBan,
            'type':this.itemType,
            'isact':false,
            'username':username
          }
          for (let index = 0; index < templist.length; index++) {
            if(templist[index].url == item.url&&templist[index].type == item.type&&templist[index].ban == item.ban){
              templist[index].ban = item.ban
              templist[index].type = item.type
              templist[index].desc = item.desc
              templist[index].prices = item.prices
              templist[index].number = item.number
              flag = 0
            }
          }
          if(flag == 1 ){
            console.log(1111)
            templist.push(item)
          }
          console.log(templist)
          localStorage.setItem("cart", JSON.stringify(templist));
        }
      }
      },
      selectBan(item){
        this.itemBan = item
      },
      selectType(item){
        this.itemType = item
      }
  },
  created(){
    axios.post('/getItemInfo',this.$route.query.num).then(res => {
        this.itemdesc=res.data.itemDesc,
        this.itemDiscount=res.data.itemDiscount,
        this.itemPrice=res.data.itemPrice,
        this.itemFullPrice=res.data.itemFullPrice,
        this.sales=res.data.sales,
        this.fullSales=res.data.fullSales,
        this.fullPL=res.data.fullPL,
        this.imglist = res.data.itemImg
        this.banlist = res.data.itemBan
        this.typelist = res.data.itemType
    })
   }
 }
</script>
<style>
 .zong{
   float:left;
   margin-top:20px;
   width:100%;
   display:flex;
   padding-left: 100px;
 }
 .picture{
   float:left;
   border:1px #000 solid;
 }
 .fen1{
   text-align:left;
   padding:0 20px 20px 20px;
   float:left;
   width:60%;
 }
 .fen2{
   background:#eee;
   height:150px;
   font-size:16px;
   font-weight:bold;
   line-height:50px;
   padding-left:20px;
 }
 .fen3{
   background:#eee;
   height:30px;
   text-align:center;
   padding-top:5px;
 }
 .sh1{
   color:red;
   margin-left:15px;
 }
 .sh2{
   color:green;
   margin-left:28px;
 }
 .sh3{
   color:orange;
   margin-left:43px;
 }
 .gou{
   background:orange;
   width:160px;
   height:50px;
   border:1px orangered solid;
   color:white;
   font-size:16px;
   margin-left:50px;
 }
 .jia{
   background:red;
   width:160px;
   height:50px;
   border:none;
   color:#fff;
   font-size:16px;
   margin-left:20px;
 }
 .zui{
   width:70%;
   border:1px #fff solid;
   margin-left:50px;
   padding:10px;
 }
 .onselect{
   background:red
 }
 .yangshi1 {
    background: rgb(16, 228, 228);
 }
 .yangshi2 {
    background: rgb(1, 8, 8);
 }

</style>