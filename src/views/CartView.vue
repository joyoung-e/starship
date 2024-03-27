<template>
    <div id="cart__wrap">
        <section-title title="cart" />
        <cart-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import CartSection from "@/components/cart/CartSection.vue"
    export default {
        components : {
            SectionTitle,
            CartSection
        }        
    }
</script>

<style lang="scss" scoped>
    #cart__wrap {
        max-width:900px; margin:50px auto;
    }
</style>