<template>
    <div>
        <section-title title="artist" />
        <artist-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import ArtistSection from "@/components/artist/ArtistSection.vue"
    export default {
        name:"ArtistView",
        components:{
            SectionTitle,
            ArtistSection
        }
    }
</script>

<style lang="scss" scoped>

</style>