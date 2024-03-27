<template>
    <div class="product__list">
        <div class="btn">
            <button @click="sortProduct('title')" :class="{on:flag=='상품명순'}">상품명순</button>
            <button @click="sortProduct('price')" :class="{on:flag=='가격순'}">가격순</button>
        </div>
        <transition-group name="translist" tag="ul" class="ulbox">
            <li v-for="(item) in products" :key="item.id">
                <div class="photo">
                    <router-link :to="{name:'Id', params:{id:item.id}}"><img :src="item.image" alt=""></router-link>
                </div>
                <div class="info">
                    <p><a href="#">{{ item.title }}</a></p>
                    <p>{{ item.price | formatPrice }}</p>
                    <p class="rating">
                        <span v-for="n in 5" :key="n" :class="{active:checkRating(n, item.rating)}">☆</span>
                    </p>
                    <button @click="addToCart(item.id)" v-if="canAddToCart(item)"><i class="fa-solid fa-cart-plus"></i></button>
                    <button disabled="true" v-else><i class="fa-solid fa-cart-shopping"></i></button>
                    <span v-if="canAddToCart(item)">{{ item.inventory - cartIdCount(item.id) }}개 남았습니다.</span>
                    <span v-else>품절!</span>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props:["title"],
        data(){
            return {
                flag : "",
                titleFlag : false,
                // priceFlag : false
                items : []
            }
        },
        computed : {
            products(){
                if (this.title=="all"){
                   this.items = this.$store.getters.fnGetProducts
                } else {
                   this.items = this.$store.getters.fnGetProducts.filter((item)=>item.category==this.title)
                }
                return this.items
            },
        },
        methods : {
            sortProduct(keyname){
                if (keyname=="title") {
                    this.flag = "상품명순"
                } else {
                    this.flag = "가격순"
                }
                this.titleFlag = !this.titleFlag
                if (this.titleFlag) {
                   this.$store.getters.fnGetProducts.sort( (a, b) => a[keyname] < b[keyname] ? -1:1 )
                } else {
                   this.$store.getters.fnGetProducts.sort( (a, b) => a[keyname] > b[keyname] ? -1:1 )
                }
            },
            checkRating(num, rating){
                return rating - num >= 0
            },
            addToCart(id) {
                this.$store.commit("add__Cart", id)
                console.log(this.$store.getters.fnGetCarts)
            },
            cartIdCount(id){
                let findItem = this.$store.getters.fnGetCarts.find(item=>item.id==id)
                if (findItem) {
                    return findItem.qty
                } else {
                    return 0
                }
            },
            canAddToCart(product){
               return product.inventory > this.cartIdCount(product.id)
            }
        },
        filters : {
            formatPrice(price){   
                if (!parseInt(price)) { return false }	
                if (price > 999) {
                    let priceString = String(price)
                    let priceArray = priceString.split("").reverse()
                    let index = 0 
                    while (priceArray.length > index+3 ) {	
                        priceArray.splice(index+3, 0, ",");	
                        index += 4;	
                    }
                    return priceArray.reverse().join("")+"원"
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .product__list {
        margin-bottom:50px;
        .btn {
            button {
                margin:0 5px; padding:5px 10px; 
                &.on { background:red }
            }
        }
        .ulbox { border:1px solid #000;
            display:flex; flex-wrap:wrap; 
            li {
                flex:0 0 21%;
                margin:20px 2%;
                .info {
                    .rating {
                        span {
                            position:relative;
                            &.active:before {
                                content:"\2605";
                                position:absolute; 
                                top:0; left:0; 
                            }
                        }
                    }
                    button {
                        background:none;
                        font-size:20px; 
                    }
                }
            }
        }
        @media screen and (max-width:768px) {
            .ulbox { 
                li {
                    flex:0 0 46%;
                    margin:20px 2%;
                }
            }
        }
    }

    .translist-enter-active, .translist-leave-active {
        transition:all 0.5s; 
    }
    .translist-enter, .translist-leave-to {
        opacity:0; 
        transform:scale(0.5)
    }

</style>