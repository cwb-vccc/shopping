<template>
 <div class="homebody">
   <navtop></navtop>
   <div style="clear:both"></div>
   <search style="margin:20px 5% 0 5%"></search>
   <midmenu></midmenu>
   <router-view/>
   <div>合作伙伴 联系我们 2020 cwb 版权所有</div>
 </div>
</template>

<script>
import navtop from '../../components/navtop.vue';
import search from '../../components/Home/Search.vue';
import midmenu from '../../components/Home/MidMenu.vue';

 export default {
   name: 'Home',
   props: {
   },
   components: {
      navtop,
      search,
      midmenu
   }
 }
</script>
<style>
.homebody{
  margin-left: 8%;
  margin-right:8%;
  background:floralwhite;
}
</style>