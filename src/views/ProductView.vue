<template>
    <div id="product__wrap" class="row">
        <section-title title="product" />
        <product-category @onChange="onChange" />
        <product-section :title="title" />
    </div>
</template>

<script>
   import SectionTitle from "@/components/layout/SectionTitle.vue"
   import ProductCategory from "@/components/product/ProductCategory.vue"
   import ProductSection from "@/components/product/ProductSection.vue"
    export default {
        name:"ProductView",
        data(){
            return {
                title : "all"
            }
        },
        components:{
            SectionTitle,
            ProductCategory,
            ProductSection
        },
        created(){
            this.$store.dispatch("init__Store")
        },
        methods : {
            onChange(name){
                this.title = name
            }
        }
    }
</script>

<style lang="scss" scoped>
   
</style>