<template>
    <section id="sliderSection">
        <div class="slide__inner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(slider, index) in sliders" :key="index">
                    <img :src="slider.image" :alt="slider.alt">
                    <router-link :to="slider.href" class="detail">자세히보기</router-link>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import '@/assets/css/myswiper.css'

    export default {
        name:"SliderSection",
        components: {
            Swiper,
            SwiperSlide
        },
        data(){
            return {
                sliders : [
                    { image:"./assets/image/main_slide_crvt_24205_pc_02.jpg", alt:"이미지1", href:"/aboutus" },
                    { image:"./assets/image/main_slide_crvt_240111_pc.jpg", alt:"이미지2", href:"/actor" },
                    { image:"./assets/image/main_slide_jsw_231212_pc.jpg", alt:"이미지3", href:"/artist" }
                ],
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    effect:"slide",  // slide, cube, coverflow, flip
                    autoplay:{
                        delay:1000
                    },
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .swiper {
        .detail {
            width:200px; height:50px; border-radius:25px;
            background:rgba(0,0,0,0.5);
            color:#fff; font-size:20px; 
            text-align:center;
            line-height:50px; 
            position:absolute; bottom:100px; 
            left:50%; transform:translateX(-50%)
         }
    }
</style>