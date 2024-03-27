<template>
    <div class="movie__wrap">
        <ul>
            <li v-for="(item, index) in movies" :key="index">
                <a :href="`https://www.themoviedb.org/movie/${item.id}?language=ko`" target="_blank">
                    <img :src="`https://www.themoviedb.org/t/p/w500/${item.poster_path}`" onerror="this.src='./image/p_cravity.jpg'" :alt="item.title">
                </a>
                <span class="title">{{ item.title  }}</span>
                <span class="star">{{ item.vote_average.toFixed(1) }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["movies"]
    }
</script>

<style lang="scss" scoped>
  .movie__wrap {
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            flex:0 0 23%;
            margin: 20px 1%;
            position: relative;
            .title {
                display: block;
                padding: 5px 0;
                font-size: 20px;
                font-weight: bold;
            }
            .star {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    width: 30px;
                    height: 30px;
                    background-color: #fff;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 50%;
                    font-size: 12px;
                }
        }
    }
    @media screen and (max-width:768px){
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                flex:0 0 42%;
                margin: 20px 4%;
            }
        }
    }
  }
</style>