<template>
    <div id="community__modify" class="row">
         <h2>{{ type }}</h2>
         <board-modify :type="type" />
    </div>
</template>

<script>
    import BoardModify from '@/components/board/BoardModify.vue'
    export default {
        components : {
            BoardModify
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
    #community__modify {
        h2 { 
            font-size:30px; text-align:center; margin:30px 0; 
        }
    }
</style>