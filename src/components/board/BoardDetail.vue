<template>
    <div class="boardDetail">
            <table border="1">
                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td>작성자</td>
                        <td>{{item.writer}}</td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td>{{item.subject}}</td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>{{item.content}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn">
                <span v-if="showBtn">
                    <router-link :to="{name:'communityModify', params:{id:item.id}}">수정</router-link>
                    <button type="button" @click="onRemove(item.id)">삭제</button>
                </span>
                <router-link to="/communityList">목록</router-link>
            </div>
    </div>
</template>

<script>
    export default {
        props:["type"],
        data(){
            return {
                item : null,
                showBtn : false
            }
        },
        created(){
            if (this.type=="notice") {
               this.item = this.$store.getters.fnGetNoticeList.find(item=>item.id==this.$route.params.id)
            } else {
               this.item = this.$store.getters.fnGetReviewList.find(item=>item.id==this.$route.params.id) 
            }
            if (this.item.writer == this.$store.getters.fnGetLogined.email) {
               this.showBtn = true
            }
            this.$store.commit("hit__Update", this.$route.params.id)
        },
        methods : {
            onRemove(id){
                this.$store.commit("on__Remove", id)
                this.$router.push("/communityList")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .boardDetail { max-width:600px; margin:0 auto 50px; 
        table {
            col:nth-child(1) { width:100px; }
            col:nth-child(2) { width:auto; }
            td { padding:5px; }
        }
        .btn { text-align:center; margin-top:20px;
            button, a { margin:0 10px; padding:10px 20px; background:#ddd;
                font-size:14px }
        }
    }
</style>