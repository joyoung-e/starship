<template>
    <section id="newArrival" class="row">
        <h2 :class="{on:newAni}">New Arrival</h2>
        <ul>
            <li v-for="(item, index) in products" :key="index" :class="{on:newAni}">
                <div class="imgbox"><a href="#"><img :src="item.photo" :alt="item.name"></a></div>
                <div class="info">
                    <div>
                        <p><a href="#">{{ item.name }}</a></p>
                        <p>{{ item.desc }}</p>
                        <p>{{ item.comment }}</p>
                        <p>{{ item.price }}</p>
                        <p>
                            <span v-for="(value, index) in item.icon" :key="index">
                                <img :src="value" alt="">
                            </span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name : "NewArrival",
        props : ["newAni"],
        data(){
            return {
                products : [
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형1", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형2", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 2EA 구매 한정", price:30000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형3", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 1EA 구매 한정", price:38000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형4", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:40000,    icon:[] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형5", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형6", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형7", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형8", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형9", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,    icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] },
                    { photo:"./assets/image/0010020003822.jpg", name:"캐릭터인형10", desc:"4월중 순차발송 예정(추후 자세한 일정 안내)", comment:"※ 1인당 5EA 구매 한정", price:39000,   icon:["./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif", "./assets/image/kr_shopimages_starshipes_prod_icons_ (1).gif"] }

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    #newArrival {
        margin:100px auto; 
        h2 { text-align:center; opacity:0; 
            transform:translateY(-100%); transition:all 0.5s;
            &.on { opacity:1; 
                transform:translateY(0%);
            }
        }
        ul { display:flex; flex-wrap:wrap; 
            li { flex:0 0 23%;
                border:0px solid #000; 
                margin:10px 1%; 
                transform:scale(0.5); opacity:0; transition:all 0.5s; 
                @for $i from 1 through 10 {
                    &:nth-child(#{$i}) {
                            transition-delay:0s;
                        &.on { transform:scale(1); opacity:1;
                            transition-delay: 0.1s * ($i - 1);
                        }
                    }
                }
                .imgbox { 
                    overflow:hidden;
                    border:1px solid #ddd; 
                    img { transition:all 0.5s }
                    &:hover { 
                        img { transform:scale(1.5)}
                    }
                }
                .info {
                    p:last-child {
                        span { margin-right:10px }
                    }
                }
            }
        }
        @media screen and (max-width:768px) {
            margin:50px auto; 
            ul { 
                li { flex:0 0 46%;
                    margin:10px 2%; position:relative; 
                    .info {
                        position:absolute; top:0; left:0; right:0; bottom:0; 
                        background:rgba(0,0,0,0.5); color:#fff; 
                        display:none; justify-content:center; align-items:center;
                        text-align:center; 
                        div { padding:30px; word-break:keep-all;
                            p:last-child {
                                span { margin-right:10px }
                            }
                        }
                    }
                    &:hover .info {
                        display:flex; 
                    }
                }
            }
        }
    }
</style>