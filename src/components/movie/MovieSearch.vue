<template>
    <div class="movie__search">
        <form @submit.prevent="onSearch">
            <input v-model="inputRef" type="search" placeholder="영화제목을 입력하세요.">
            <button type="submit">검색하기</button>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputRef : ""
            }
        },
        methods:{
            onSearch(){
                if (this.inputRef) {
                    console.log(this.inputRef)
                    this.$store.commit("on__Search", this.inputRef)
                    this.$emit("onSearch", 1)
                    this.$emit("update:currentPage", 1)
                    this.inputRef = ""
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.movie__search {
    text-align: center;
    margin-bottom: 70px;
    input {
      border: 1px solid #e8ecf2;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 50px;
      max-width: 300px;
      margin-right: 10px;
    }
    button {
      color: #fff;
      background: #00c183;
      border-radius: 50px;
      padding: 10px 50px;
    }
  }
</style>