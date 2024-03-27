<template>
    <div id="community__detail" class="row">
      <h2>{{ type }}</h2> 
      <board-detail :type="type" />
    </div>
</template>

<script>
    import BoardDetail from '@/components/board/BoardDetail.vue'
    export default {
        components : {
            BoardDetail,
        },
        data(){
            return {
                type:""
            }
        },
        created(){
            this.type = this.$store.getters.fnGetBoardType
        }
    }
</script>

<style lang="scss" scoped>
    #community__detail {
        h2 { 
            font-size:30px; text-align:center; margin:30px 0; 
        }
    }
</style>