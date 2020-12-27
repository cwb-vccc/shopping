<template>
<div>
    <div style="display:flex;">
        <div style="margin-right:3%;">
          <img src="../../assets/标志.jpg" alt="" width="100px" height="100px">
        </div>
        <div style="margin-right:2%;">
            <h1 class="h1">假 面 骑 士</h1>
            <h1 class="h2">仮面ライダー</h1>
        </div>
        <input type="text" class="input" placeholder="搜索">
        <button class="button">搜索</button>
    </div>
</div>
 
</template>
<script>
 export default {
   name: 'search',
   props: {
   }
 }
</script>
<style>
.input{
  width:700px;
  height:50px;
  margin-top:25px;
  margin-left:5%;
  border:3px red solid;
}
.h1{
  padding-top:15px;
  margin-left:25px;
  font-style: italic;
}
.h2{
  margin-left:10px;
  font-style: italic;
}
.button{
  width:200px;
  height:50px;
  margin-top:25px;
  background:red;
  border:none;
  color:#fff;
  font-size:16px;
  padding:10px;
}
</style>