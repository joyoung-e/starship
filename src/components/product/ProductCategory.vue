<template>
    <div class="cate__button">
        <button v-for="(item, index) in category" :key="index" @click="onClick(item)" :class="{on:ontitle==item}">
            {{ item }}
        </button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                category : ["all", "woman", "man", "underwear", "kids"],
                ontitle : "all"
            }
        },
        methods : {
            onClick(name){
                this.$emit("onChange", name)
                this.ontitle = name
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cate__button {
        display:flex; justify-content:center; 
        button { width:100px; height:40px;  margin:0 20px; 
            background:blue; color:#fff;
            &.on { background:red }
        }
    }
</style>