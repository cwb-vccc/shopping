<template>
 <div class="background">
  <router-view></router-view>
 </div>
</template>
<script>
 export default {
   name: 'LoginRegister',
   props: {
   },
   components: {
 
   },
   data () {
     return {
       single:false
      }
   }
 }
</script>
<style >
.background{
  text-align: center;
  margin-left: 5%;
  margin-right:5%;
  background:url('../../assets/背景.jpg') ;
  background-size: 100% 100%;
  height: 80%;
  position: fixed;
  width: 90%;
}
</style>