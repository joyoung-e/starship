<template>
    <section id="sliderSection2" :class="{row:true, on:slideAni}">
        <div class="slide__inner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(slider, index) in sliders" :key="index">
                    <img 
                    :src="slider.currentImage" 
                    :alt="slider.alt" 
                    @mouseover="changeImage(index, true)"
                    @mouseout="changeImage(index, false)">
                </swiper-slide>
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
        name:"SliderSection2",
        components: {
            Swiper,
            SwiperSlide
        },
        props : ["slideAni"],
        data(){
            return {
                sliders : [
                    { currentImage:"./assets/image/p_cravity_g.jpg",        image1:"./assets/image/p_cravity_g.jpg",        image2:"./assets/image/p_cravity.jpg", alt:"김은영" },
                    { currentImage:"./assets/image/p_ive_g.jpg",            image1:"./assets/image/p_ive_g.jpg",            image2:"./assets/image/p_ive.jpg", alt:"홍길동" },
                    { currentImage:"./assets/image/p_jeongsewoon_g.jpg",    image1:"./assets/image/p_jeongsewoon_g.jpg",    image2:"./assets/image/p_jeongsewoon.jpg", alt:"장나라" },
                    { currentImage:"./assets/image/p_cravity_g.jpg",        image1:"./assets/image/p_cravity_g.jpg",        image2:"./assets/image/p_cravity.jpg", alt:"김은영" },
                    { currentImage:"./assets/image/p_ive_g.jpg",            image1:"./assets/image/p_ive_g.jpg",            image2:"./assets/image/p_ive.jpg", alt:"홍길동" },
                    { currentImage:"./assets/image/p_jeongsewoon_g.jpg",    image1:"./assets/image/p_jeongsewoon_g.jpg",    image2:"./assets/image/p_jeongsewoon.jpg", alt:"장나라" },
                    { currentImage:"./assets/image/p_cravity_g.jpg",        image1:"./assets/image/p_cravity_g.jpg",        image2:"./assets/image/p_cravity.jpg", alt:"김은영" },
                    { currentImage:"./assets/image/p_ive_g.jpg",            image1:"./assets/image/p_ive_g.jpg",            image2:"./assets/image/p_ive.jpg", alt:"홍길동" },
                    { currentImage:"./assets/image/p_jeongsewoon_g.jpg",    image1:"./assets/image/p_jeongsewoon_g.jpg",    image2:"./assets/image/p_jeongsewoon.jpg", alt:"장나라" }
                ],
                swiperOption: {
                    slidesPerView: 3,
                    slidesPerGroup : 1,
                    spaceBetween: 50,
                    freemode:true,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakpoints: {
                        768: {   //브라우저가 768보다 클 때
                            slidesPerView: 5,  
                            spaceBetween: 50,
                        }
                    }
                }
            }
        },
        methods: {
            changeImage(index, isMouseOver) {
                const slider = this.sliders[index];
                slider.currentImage = isMouseOver ? slider.image2 : slider.image1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #sliderSection2 { margin:100px auto;
        transform:translateY(100%); transition:all 0.5s; 
        &.on { transform:translateY(0%) }
        .slide__inner {
            padding:0 50px; overflow:hidden;
            .swiper {
                img { border-radius:20px; cursor:pointer }
            }
        }
    }
</style>