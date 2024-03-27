<template>
    <div id="join__wrap" class="row">
        <section-title title="join" />
        <join-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import JoinSection from "@/components/member/JoinSection.vue"
    export default {
        components : {
            SectionTitle,
            JoinSection
        }
    }
</script>

<style lang="scss" scoped>

</style>