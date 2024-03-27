<template>
    <div class="tag__list">
        <button :class="{active : activeName==item.name }" v-for="(item, index) in movieType" :key="index" @click="onClick(item.media, item.type, item.name)">
            {{ item.name }}
        </button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                activeName : "인기 영화",
                movieType : [
                    { name:"인기 영화",    media:"movie", type:"popular" },
                    { name:"현재 상영",    media:"movie", type:"now_playing"  },
                    { name:"최신 영화",    media:"movie", type:"upcoming"  },
                    { name:"인기 TV SHOW", media:"tv", type:"popular" },
                    { name:"TV 순위",      media:"tv", type:"top_rated" },
                    { name:"TV SHOW",      media:"tv", type:"on_the_air" }
                ]
            }
        },
        methods : {
            onClick(media, type, name){
                // this.$emit("onSearch", { media, type })
                this.$store.commit("on__Update", { media, type, name })
                this.$emit("onSearch", 1)
                this.$emit('update:currentPage', 1)
                this.activeName = name
            }
        }
    }
</script>

<style lang="scss" scoped>
.tag__list {
    display:flex;
    flex-wrap:wrap; 
    justify-content:center; 
    button { flex:0 0 120px;
        border: 1px solid #00c183;
        padding: 10px 0px;
        margin: 0 10px 10px;
        color: #00c183;
        background: #fff;
        &.active, &:hover {
            color:#fff;
            background:#00c183
        }
    }
}
</style>