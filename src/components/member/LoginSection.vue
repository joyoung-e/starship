<template>
    <div class="loginForm">
        <form @submit.prevent="fnLogin">
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
                </tbody>
            </table>
            <div class="btn">
                <button type="submit">로그인</button>
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
            }
        },
        methods : {
            fnLogin(){
                if (!this.dEmail) {
                    alert("이메일을 입력하세요.")
                    this.$refs.email.focus()
                    return false
                } else if (!this.dPassword) {
                    alert("비밀번호를 입력하세요.")
                    this.$refs.pw.focus()
                    return false
                } 
                this.$store.commit("fnLogin", {email:this.dEmail, pw:this.dPassword})
                if(this.$store.getters.fnGetLogined) {
                    this.$router.push("/")
                } else {
                    alert("회원이 아닙니다.")
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .loginForm {
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