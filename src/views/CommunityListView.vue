<template>
    <div id="community__list" class="row">
        <board-type @changeType="changeType" />
        <board-list :type="type" />
    </div>
</template>

<script>
    import BoardType from '@/components/board/BoardType.vue'
    import BoardList from '@/components/board/BoardList.vue'
    export default {
        components : {
            BoardType,
            BoardList
        },
        data(){
            return {
                type : ""
            }
        },
        created(){
            this.type = this.$store.getters.fnGetBoardType
        },
        methods : {
            changeType(type){
                this.type = type
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>