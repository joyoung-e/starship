<template>
    <div class="joinForm">
        <form @submit.prevent="fnRegisterUser">
            <table border="0">
                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <td><label for="userId">이메일 : </label></td>
                        <td><input type="email" id="userId" name="userId" v-model="dEmail" ref="email"></td>
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
                <button type="submit">회원가입</button>
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
                dPasswordOk : ""
            }
        },
        methods : {
            fnRegisterUser(){
                if (!this.dEmail) {
                    alert("이메일을 입력하세요.")
                    this.$refs.email.focus()
                    return false
                } else if (!this.dPassword) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pw.focus()
                    return false
                } else if (!this.dPasswordOk) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pwok.focus()
                    return false
                } else if (this.dPassword!==this.dPasswordOk) {
                    alert("비밀번호가 맞지 않습니다.")
                    this.$refs.pwok.focus()
                    return false
                }
                this.$store.commit("fnRegisterUser", { email:this.dEmail, pw:this.dPassword })
                if (this.$store.getters.fnGetMessage){
                    alert("회원가입이 성공했습니다.")
                    this.dEmail = ""
                    this.dPassword = ""
                    this.dPasswordOk = ""
                    this.$router.push("/login")
                } else {
                    alert("중복된 이메일입니다.")
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .joinForm {
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
            button { padding:10px; background:red; color:#fff;  }
        }
    }
</style>