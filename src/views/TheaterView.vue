<template>
    <div class="theater__wrap">
        <section-title title="theater" />
        <theater-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import TheaterSection from "@/components/theater/TheaterSection.vue"
    export default {
        components : {
            SectionTitle,
            TheaterSection
        }
    }
</script>

<style lang="scss" scoped>
    .theater__wrap {
        max-width:1200px; margin:50px auto; 
    }
</style>