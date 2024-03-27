<template>
    <div class="boardType">
        <button v-for="item in type" :key="item" @click="onClick(item)" :class="{on:active==item}">{{ item }}</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                type : ["notice", "review"],
                active : ""
            }
        },
        created(){
            this.active = this.$store.getters.fnGetBoardType
        },
        methods : {
            onClick(type){
                this.$store.commit("change__Type", type)
                this.$emit("changeType", type)
                this.active = type
            }
        }
    }
</script>

<style lang="scss" scoped>
    .boardType {
        text-align:center; margin-top:30px; 
        button { margin:20px; width:100px; height:40px; 
            &.on { background:#000; color:#fff; }
        }
    }
</style>