<template>
    <div class="movie__container">
        <section-title title="movie" />
        <movie-search @onSearch="onSearch" :currentPage.sync="currentPage" />
        <movie-tag @onSearch="onClick" :currentPage.sync="currentPage" />
        <movie-section :movies="movies" />
        <pagination :totalItems="totalItems" :currentPage.sync="currentPage" :itemsPerPage="itemsPerPage" @onClick="onClick" @onSearch="onSearch" />
    </div>
</template>

<script>
    import SectionTitle from "@/components/layout/SectionTitle.vue"
    import MovieSearch from "@/components/movie/MovieSearch.vue"
    import MovieTag from "@/components/movie/MovieTag.vue"
    import MovieSection from "@/components/movie/MovieSection.vue"
    import Pagination from "@/components/layout/Pagination.vue"
    export default {
        data(){
            return {
                movies : [],
                totalItems : 1,
                currentPage : 1,
                itemsPerPage : 20,
                id:"64ed394366c7282a2d002b595b1b9954"
            }
        },
        components:{
            SectionTitle,
            MovieSearch,
            MovieTag,
            MovieSection,
            Pagination
        },
        methods:{
            async onSearch(page){
                let subject = this.$store.getters.fnGetSubject
                try {
                    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.id}&language=ko-KR&query=${subject}&page=${page}`)
                    let result = await response.json()
                    this.movies = result.results
                    this.totalItems = result.total_results
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            },
            async onClick(page){
                let {media, type} = this.$store.getters.fnGetMovieTag
                try {
                    let response = await fetch(`https://api.themoviedb.org/3/${media}/${type}?api_key=${this.id}&language=ko-KR&page=${page}`)
                    let result = await response.json()
                    this.movies = result.results
                    this.totalItems = result.total_results
                    console.log(this.movies)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async created(){
            try {
              let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.id}&language=ko-KR&page=1`)
              let result = await response.json()
              this.movies = result.results
              this.totalItems = result.total_results
              console.log(result.total_results)
            } catch (error) {
                console.log(error)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .movie__container {
        max-width:1200px; margin:50px auto;
    }
</style>