<template>
    <div class="row">
        <section-title title="my info" />
        <modify-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import ModifySection from "@/components/member/ModifySection.vue"
    export default {
        components:{
            SectionTitle,
            ModifySection
        },
    }
</script>

<style lang="scss" scoped>

</style>