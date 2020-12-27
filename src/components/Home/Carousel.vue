<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem style="display:flex;">
            <div class="alt"><img src="../../assets/01-1.jpg" alt=""></div>
            <div class="alt"><img src="../../assets/01-2.jpg" alt=""></div>
            <div class="alt"><img src="../../assets/01-3.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem style="display:flex;">
            <div class="alt"><img src="../../assets/02-1.jpg" alt=""></div>
            <div class="alt"><img src="../../assets/02-2.jpg" alt=""></div>
            <div class="alt"><img src="../../assets/02-3.jpg" alt=""></div>
        </CarouselItem>
        <CarouselItem style="display:flex;">
            <div class="alt"><img src="../../assets/03-1.jpg" alt=""></div>
            <div class="alt"><img src="../../assets/03-2.jpg" alt=""></div>
            <div class="alt"><img src="../../assets/03-3.jpg" alt=""></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        name:'carousel',
        data () {
            return {
                value2: 0
            }
        }
    }
</script>
<style>
.alt{
    margin-left:4%;
    margin-right:4%;
}
</style>