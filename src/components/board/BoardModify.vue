<template>
    <div class="boardModify">
        <form @submit.prevent="onSubmit">
            <table border="1">
                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td>작성자</td>
                        <td><input type="text" v-model="writer" disabled></td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td><input type="text" v-model="subject"></td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td><textarea v-model="content"></textarea></td>
                    </tr>
                </tbody>
            </table>
            <div class="btn">
                <button type="submit">완료</button>
                <router-link to="/communityList">목록</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        props : ["type"],
        data(){
            return {
                id:"",
                writer:"",
                subject:"",
                content:"",
            }
        },
        created(){
            if (this.type=="notice") {
               let {id, writer, subject, content } = this.$store.getters.fnGetNoticeList.find(item=>item.id==this.$route.params.id)
               this.id = id
               this.writer = writer
               this.subject = subject
               this.content = content
            } else {
               let { id, writer, subject, content } = this.$store.getters.fnGetReviewList.find(item=>item.id==this.$route.params.id)
               this.id = id
               this.writer = writer
               this.subject = subject
               this.content = content
            }
        },
        methods : {
            onSubmit(){
                this.$store.commit("on__Update", {id:this.id, subject:this.subject, content:this.content})
                window.location.href = "/communityList"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .boardModify { max-width:600px; margin:0 auto 50px; 
        table {
            col:nth-child(1) { width:100px; }
            col:nth-child(2) { width:auto; }
            td { padding:5px;
                input { width:100%; border:1px solid #ddd; height:30px; padding:5px; }
                textarea { width:100%; border:1px solid #ddd; padding:5px; height:200px }
            }
        }
        .btn { text-align:center; margin-top:20px;
            button, a { margin:0 10px; padding:10px 20px; background:#ddd;
                font-size:14px }
        }
    }
</style>