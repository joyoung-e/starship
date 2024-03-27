<template>
    <div class="modifyForm">
        <form @submit.prevent="fnModifyUser">
            <table border="0">
                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td><label for="userId">이메일 : </label></td>
                        <td><input type="email" id="userId" name="userId" v-model="dEmail" disabled></td>
                    </tr>
                    <tr>
                        <td><label for="userPw">비밀번호 : </label></td>
                        <td><input type="password" id="userPw" name="userPw" v-model="dPassword" ref="pw"></td>
                    </tr>
                    <tr>
                        <td><label for="userPwOk">비밀번호 확인 : </label></td>
                        <td><input type="password" id="userPwOk" v-model="dPasswordOk" ref="pwok"></td>
                    </tr>
                </tbody>
            </table>
            <div class="btn">
                <button type="submit">정보수정</button>
                <button type="button" @click="onClick">회원탈퇴</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dEmail : "",
                dPassword : "",
                dPasswordOk : "",
                pw : ""
            }
        },
        created(){
           this.dEmail = this.$store.getters.fnGetLogined.email
           this.pw = this.$store.getters.fnGetLogined.pw
        },
        methods : {
            fnModifyUser(e){
                if (!this.dPassword) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pw.focus()
                    e.preventDefault()
                } else if (!this.dPasswordOk) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pwok.focus()
                    e.preventDefault()
                } else if (this.dPassword!==this.dPasswordOk) {
                    alert("비밀번호가 맞지 않습니다.")
                    this.$refs.pwok.focus()
                    e.preventDefault()
                }
                this.$store.commit("fnModifyUser", { email:this.dEmail, pw:this.dPassword })
                this.$router.push("/")
            },
            onClick(e){
                if (!this.dPassword) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pw.focus()
                    e.preventDefault()
                } else if (!this.dPasswordOk) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pwok.focus()
                    e.preventDefault()
                } else if (this.dPassword!==this.dPasswordOk || this.dPassword!==this.pw) {
                    alert("비밀번호가 맞지 않습니다.")
                    this.$refs.pwok.focus()
                    e.preventDefault()
                } else {
                    let answer = confirm ("정말로 취소하시겠습니까?")
                    if (!answer) e.preventDefault()
                }
                this.$store.commit("memberPostRemove", this.dEmail)
                this.$store.commit("fnRemoveUser", this.dEmail)
                this.$store.commit("fnLogout")
                this.$router.push("/")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modifyForm {
        max-width:600px; margin:0px auto 50px; 
        table { 
            col:nth-child(1) { width:150px }
            col:nth-child(2) { width:auto }
            td { padding:5px; 
                &:nth-child(1) { text-align:right }
                input { border:1px solid #ddd; height:30px; width:100%;
                    text-indent:1em; }
            }
        }
        .btn { text-align:center; margin-top:20px; 
            button { padding:10px; background:red; color:#fff; margin: 0 10PX; }
        }
    }
</style>