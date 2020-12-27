<template>
 <div>
    <Divider orientation="left" style="font-weight:bold;">{{this.lei}}</Divider>
    <div style="float:left;">
        <img :src="require('../../assets/'+this.leiBan+'.jpeg')" alt="" width="200px" height="100%"> 
    </div>
   <div style="float:left;display:flex" v-for="(shop,i) in shopList" :key="i">
        <Card class="att">
        <div style="text-align:center" @click="shopinfo(shop.imgid)">
            <img :src="require('../../assets/'+shop.imgid+'.jpg')" width="90%">
            <h3>{{shopList[i].text}}</h3>
        </div>
        </Card>
    </div>
 </div>
</template>
<script>
import axios from 'axios'
 export default {
   props:['lei'],
   name: 'BodyItem',
   data () {
     return {
        shopList:[],
        leiBan:''
     }
  },
   methods: {
    shopinfo(ids){
        this.$router.push({path:'/home/itembody',query: {num:ids}})
     }
  },
    created(){
    axios.post('/getItem',this.lei).then(res => {
        this.shopList=res.data.data;
        this.leiBan=res.data.iteBan;
    })
  }
}
</script>

<style>
.att{
    width:230px;
    height:260px;
    margin:0 20px 10px 20px;
}
</style>