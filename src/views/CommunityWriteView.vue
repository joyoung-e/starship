<template>
    <div id="community__write" class="row">
        <h2>{{ type }}</h2>
        <board-write :type="type" />
    </div>
</template>

<script>
    import BoardWrite from '@/components/board/BoardWrite.vue'
    export default {
        components : {
            BoardWrite
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
    #community__write {
        h2 { 
            font-size:30px; text-align:center; margin:30px 0; 
        }
    }
</style>