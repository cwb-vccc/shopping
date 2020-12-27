<template>
 <div>
   <carousel></carousel>
   <bodyItem lei="build"></bodyItem>
   <bodyItem lei="saber" style="margin-top:20px;padding-top:30px;"></bodyItem>
   <bodyItem lei="zero.one" style="margin-top:20px;padding-top:30px;"></bodyItem>
   <bodyItem lei="z.i.o" style="margin-top:20px;padding-top:30px;"></bodyItem>
   <bodyItem lei="真骨雕" style="margin-top:20px;padding-top:30px;"></bodyItem>
   <div style="padding-top:50px;"><Divider>没有更多了</Divider></div>
 </div>
</template>

<script>
import carousel from '../../components/Home/Carousel.vue'
import bodyItem from '../../components/Home/BodyItem.vue'
 export default {
   name: 'HomeBody',
   components: {
      carousel,
      bodyItem
   }
 }
</script>

<style scoped lang='scss'>

</style>