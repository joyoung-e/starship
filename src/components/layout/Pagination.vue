<template>
    <div>
        <div :class="{pagination:true, pc:true}">
            <button class="goend" :disabled="currentPage==1" @click="prevPage">이전</button>
            <span class="pc"  v-for="page in displayedPages1" :key="page">
                <button :class="{active:currentPage==page}" @click="goToPage(page)">{{ page }}</button>
            </span>
            <button class="goend" :disabled="currentPage == pageCount" @click="nextPage">다음</button>
        </div>
        <div :class="{pagination:true, mobile:true}">
            <button class="goend" :disabled="currentPage==1" @click="prevPage">이전</button>
            <span class="pc"  v-for="page in displayedPages2" :key="page">
                <button :class="{active:currentPage==page}" @click="goToPage(page)">{{ page }}</button>
            </span>
            <button class="goend" :disabled="currentPage == pageCount" @click="nextPage">다음</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            totalItems : { type : Number, required : true },
            currentPage :  { type : Number, required : true },
            itemsPerPage : { type : Number, required : true },
        },
        computed : {
            pageCount(){
               return Math.ceil(this.totalItems / this.itemsPerPage);
            },
            displayedPages1(){
                const pages = []
                const startPage = Math.max(1,  this.currentPage - 5)
                const endPage = Math.min(this.pageCount, startPage+9)
                for (let i=startPage; i<=endPage; i++){
                    pages.push(i);
                }
                return pages
            },
            displayedPages2(){
                const pages = []
                const startPage = Math.max(1,  this.currentPage - 2)
                const endPage = Math.min(this.pageCount, startPage+4)
                for (let i=startPage; i<=endPage; i++){
                    pages.push(i);
                }
                return pages
            }
        },
        methods : {
            goToPage(page){
                let search = this.$store.getters.fnGetSearch
                if (search) {
                    this.$emit("onSearch", page)
                    this.$emit('update:currentPage', page)
                } else {
                    this.$emit("onClick", page)
                    this.$emit('update:currentPage', page)
                }
            },
            prevPage(){
                if (this.currentPage > 1){
                    this.$emit("update:currentPage", --this.currentPage)
                    this.$emit("onClick", this.currentPage)
                }
            },
            nextPage(){
                if (this.currentPage < this.pageCount){
                    this.$emit("update:currentPage", ++this.currentPage)
                    this.$emit("onClick", this.currentPage)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        justify-content:center; align-items:center;     
        &.pc { display:flex;  }
        &.mobile { display:none }
        .goend {
            background:#000; color:#fff;
            padding:5px 10px; margin:0 5px; 
            &:disabled { background:#999 }
        }
        span {
            button { background:#ddd; margin:0 2px; border-radius:2px;
                width:30px; height:20px; 
                &.active {
                    background:#f00;
                    color:#fff
                }
            }
        }
        @media screen and (max-width:768px) {
           &.pc { display:none }
           &.mobile { display:flex; }
        }
    }
</style>