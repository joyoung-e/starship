<template>
    <div class="section__title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name:"SectionTitle",
        props : ["title"]
    }
</script>

<style lang="scss" scoped>
    .section__title {
        h2 {
            text-align: center;
            font-size: 50px;
            text-transform:capitalize;
            padding:1em;
            font-weight: bold;
        }
    }
</style>