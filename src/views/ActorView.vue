<template>
    <div class="actor__container">
        <section-title title="actor" />
        <actor-search @onSearch="onSearch" />
        <actor-tag @onSearch="onSearch" />
        <actor-section :keyword="actorTag" />
    </div>
</template>

<script>
   import SectionTitle from "@/components/layout/SectionTitle.vue"
   import ActorSearch from "@/components/actor/ActorSearch.vue"
   import ActorTag from "@/components/actor/ActorTag.vue"
   import ActorSection from "@/components/actor/ActorSection.vue"
    export default {
        name:"ActorView",
        data(){
            return {
                actorTag : "",
            }
        },
        components:{
            SectionTitle,
            ActorSearch,
            ActorTag,
            ActorSection
        },
        methods : {
            onSearch(name){
                this.actorTag = name
            }
        }
    }
</script>

<style lang="scss" scoped>
    .actor__container {
        max-width:1200px; margin:50px auto;
    }
</style>