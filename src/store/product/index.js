import axios from 'axios';

export default {
    state : {
        products : [],
        carts : []  // [{id:0, qty:1}, {id:1, qty:2}]
    },
    mutations : {
        set__Store(state, payload){
            state.products = payload
        },
        add__Cart(state, payload){
            let findItem = false
            state.carts.map(item=>{
                if (item.id==payload) {
                    item.qty++
                    findItem = true
                }
            })
            if (!findItem){
                state.carts.push({id:payload, qty:1})
            }
        },
        qty__Update(state, payload){
            let { id, qty } = payload
            state.carts.map(item=>{
                if (item.id == id) {
                    item.qty = qty
                }
            })
        },
        item__Remove(state, payload){
            state.carts = state.carts.filter(item=>item.id != payload)
        }
    },
    actions : {
        init__Store( { commit } ){
            axios.get('./assets/data/products.json')
            .then((response)=>{
                console.log(response)
                commit("set__Store", response.data)
            })
        }
    },
    getters : {
        fnGetProducts : state => state.products,
        fnGetCarts : state => state.carts
    }
}