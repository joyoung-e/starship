<template>
     <div id="login__wrap" class="row">
        <section-title title="login" />
        <login-section />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import LoginSection from "@/components/member/LoginSection.vue"
    export default {
        components : {
            SectionTitle,
            LoginSection
        }
    }
</script>

<style lang="scss" scoped>

</style>