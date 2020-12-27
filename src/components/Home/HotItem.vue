<template>
 <div>
    <Card style="width:300px">
        <p slot="title">好物推荐</p>
        <div v-for="(shop,i) in shopList" :key="i" v-show="!(shop.imgid==tui)">
          <Card style="width:270px">
            <div style="text-align:center"  @click="shopinfo(shop.imgid)">
                <img :src="require('../../assets/'+shop.imgid+'.jpg')" width="90%">
                <h3>{{shopList[i].text}}</h3>
            </div>
          </Card>
          <Divider></Divider>
        </div>
    </Card>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   props:{
       tui:Number
   },
   name: 'HotItem',
   data () {
     return {
        shopList:[],
     }
  },
   methods: {
     shopinfo(ids){
        this.$router.push({path:'/home/itembody',query: {num:ids}})
        location.reload();
     },
     pan(){
         if(this.tui/500>1){
             return '真骨雕';
         }
         else if(this.tui/400>1){
             return 'z.i.o';
         }
         else if(this.tui/300>1){
             return 'zero.one';
         }
         else if(this.tui/200>1){
             return 'saber';
         }
         else if(this.tui/100>1){
             return 'build';
         }
     }
  },
  
  created(){
    axios.post('/getItem',this.pan()).then(res => {
        this.shopList=res.data.data;
    })
  }
 }
</script>

<style scoped lang='scss'>

</style>