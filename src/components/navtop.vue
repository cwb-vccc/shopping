<template>
 <div class="body">
    <div v-if=" username == null" style="float:left">
      <router-link to="/" class="nav_text_left" >游客 , 请登录</router-link>
      <router-link to="/register" class="nav_text_left" style="margin-left:20px" >注册</router-link>
    </div>
    <div v-if=" username != null" style="float:left">
      <span class="nav_text_left" style="color:green">欢迎您! {{username}}</span>
      <a class="nav_text_left" style="margin-left:10px" @click="loginOut()">退出</a>
    </div>
    <div  class="nav_text_right" >
      <router-link v-show="toto" to="/home/shoppingcart" class="aa">购物车</router-link>
    </div>
    <div  class="nav_text_right" >
      <router-link to="/home" class="aa" >商城首页</router-link>
    </div>
 </div>
</template>

<script>
 export default {
   name: 'navtop',
   props: {
   },
   data () {
     return {
       username : localStorage.getItem('username'),
       toto : true
     }
   },
   methods: {
      loginOut(){
        this.username = null
        this.toto=false
      }
   }
 }
</script>

<style>
.aa{
  color:orange;
}
.body{
  margin-top: 5px;
  text-align: left;
}

.nav_text_left{
  font-size: 20px;
  color: orange;
  font-weight: bold;
}
.nav_text_right{
  font-size: 20px;
  font-weight: bold;
  float: right;
  margin-left: 30px;
}
.right{
  color:#000;
  padding-right:5px;
  height:14px;
  size: 6;
}
</style>