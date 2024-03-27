<template>
    <div class="boardList">
        <table border="1">
            <colgroup>
                <col>
                <col>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in showList" :key="index">
                    <td>{{ countMinus(index) }} ({{ item.id}})</td>
                    <td><router-link :to="{name:'communityDetail', params:{id:item.id}}">{{ item.subject }}</router-link></td>
                    <td>{{ item.writer }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.hit }}</td>
                </tr>
            </tbody>
        </table>
        <div class="btn" v-if="showBtn">
            <router-link to="/communityWrite">
                글쓰기
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:["type"],
        data(){
            return {
                email : "",
                count : 0,
            }
        },
        created(){
            this.email = this.$store.getters.fnGetLogined.email
            console.log(this.email)
        },
        computed : {
            showBtn(){
                if (this.type=="notice" && this.email=="joyoung_e@naver.com") {
                    return true
                } else if (this.type=="notice" && this.email!="joyoung_e@naver.com") {
                    return false
                } else if (this.type=="review" && this.email) {
                    return true
                } else if (this.type=="review" && !this.email) {
                    return false
                }
            },
            showList(){
                if (this.type=="notice") {
                    this.count = this.$store.getters.fnGetNoticeList.length
                    return this.$store.getters.fnGetNoticeList
                } else {
                    this.count = this.$store.getters.fnGetReviewList.length
                    return this.$store.getters.fnGetReviewList
                }
            },
        },
        methods : {
            countMinus(index){
                return this.count - index ;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .boardList {
        margin:0px 0 50px; 
        table {
            col:nth-child(1) {width:50px }
            col:nth-child(2) {width:auto }
            col:nth-child(3) {width:200px }
            col:nth-child(4) {width:100px }
            col:nth-child(5) {width:100px }
            th { padding:5px }
            td { 
                padding:5px; text-align:center;
                &:nth-child(2) { text-align:left }
            }
        }
        .btn {
            text-align:center; margin:20px 0; 
            a { padding:10px 20px; background:red; color:#fff }
        }
    }
</style>