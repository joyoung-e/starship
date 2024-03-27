export default {
    state : {
        oUser : [], // [ {email:'', pw:''} ]
        message : false,
        logined : null, // { email:"", pw:"" }
    },
    mutations : {
        fnRegisterUser(state, payload){
            let findEmail = false
            let { email, pw } = payload
            state.oUser.map((item)=>{
                if (item.email==email) {
                    findEmail = true
                }
            })
            if (!findEmail) {
                state.oUser.push({email, pw})
                console.log(state.oUser)
                state.message = true
            } else {
                state.message = false
            }
        },
        fnLogin(state, payload){
            let { email, pw } = payload
            state.oUser.map((item)=>{
                if (item.email==email && item.pw==pw){
                    state.logined = { email, pw }
                }
            })   
        },
        fnLogout(state){
            state.logined = null
        },
        fnModifyUser(state, payload){
            let {email, pw} = payload
            state.oUser.map((item)=>{
                if (item.email==email){
                    item.pw = pw
                }
            })
        },
        fnRemoveUser(state, payload){
            state.oUser = state.oUser.filter(user=>user.email!==payload)
        }
    },
    actions : { },
    getters : {
        fnGetOuser : state => state.oUser,
        fnGetMessage : state => state.message,
        fnGetLogined : state => state.logined
    }
}