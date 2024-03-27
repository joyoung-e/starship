<template>
    <main>
        <slider-section />
        <slider-section2 :slideAni="slideAni" />
        <new-arrival :newAni="newAni" />
    </main>
</template>

<script>
    import SliderSection from "@/components/section/SliderSection.vue"
    import SliderSection2 from "@/components/section/SliderSection2.vue"
    import NewArrival from "@/components/section/NewArrival.vue"

    export default {
        name:"HomeView",
        components:{
            SliderSection,
            SliderSection2,
            NewArrival
        },
        data(){
            return {
                slideAni : false,
                newAni : false
            }
        },
        mounted(){
            document.addEventListener("scroll", this.handleScroll)
        }, 
        methods : {
            handleScroll(){
                console.log(window.scrollY)
                if (window.scrollY>300){
                    this.slideAni = true
                } else {
                    this.slideAni = false
                }
                if (window.scrollY>600) {
                    this.newAni = true
                } else {
                    this.newAni = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>