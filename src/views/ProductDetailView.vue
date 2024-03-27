<template>
    <div class="row">
        <section-title title="Product Detail" />
        <product-detail-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import ProductDetailSection from "@/components/product/ProductDetailSection.vue"
    export default {
        components : {
            SectionTitle,
            ProductDetailSection
        }
    }
</script>

<style lang="scss" scoped>

</style>