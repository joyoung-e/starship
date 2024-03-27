<template>
    <header id="header" ref="header">
        <h1 class="header__logo">
            <router-link to="/">STARSHIP SQUARE</router-link>
        </h1>
        <div class="member" v-if="token">
            <a href="#" @click.prevent="logOut">로그아웃</a>
            <router-link to="/memberModify">정보수정({{email}})</router-link>
        </div>
        <div class="member" v-else>
            <router-link to="/login">로그인</router-link>
            <router-link to="/join">회원가입</router-link>
        </div>
        <div class="itemcount">
            <router-link to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>{{ itemCount }}</span>
            </router-link>
        </div>
        <weather />
        <div class="openNav" @click="openNav">
            <span class="blind">메뉴 열기</span>
            <i class="fa-solid fa-bars"></i>
        </div>
        <nav id="header__nav" :class="{on:open}">
            <ul @click="closeNav">
                <li>
                    <router-link to="/artist">Artist</router-link>
                </li>
                <li>
                    <router-link to="/actor">Actor</router-link>
                </li>
                <li>
                    <router-link to="/movie">Movie</router-link>
                </li>
                <li>
                    <router-link to="/theater">Theater</router-link>
                </li>
                <li>
                    <router-link to="/product">Product</router-link>
                </li>
                <li>
                    <router-link to="/communityList">Community</router-link>
                </li>
            </ul>
            <div class="closeNav" @click="closeNav">
                <span class="blind">메뉴 닫기</span>
                <i class="fa-solid fa-times"></i>
            </div>
        </nav>
    </header>
</template>

<script>
    import Weather from "@/components/layout/Weather.vue"
    export default {
        name:"Header",
        data(){
            return {
                open : false,
                email : ""
            }
        },
        components : {
            Weather
        },
        mounted(){
            console.log("헤더높이 : ", this.$refs.header.offsetHeight)
            console.log("브라우저상단에서부터 거리값 : ", this.$refs.header.offsetTop)
        },
        computed : {
            itemCount(){
                let set = new Set(this.$store.getters.fnGetCarts)
                let items = [...set] 
                return items.length
            },
            token() {
                if (this.$store.getters.fnGetLogined){
                    this.email = this.$store.getters.fnGetLogined.email
                    return true
                } else {
                    return false
                }
            }
        },
        methods : {
            openNav(){
                this.open = true
            },
            closeNav(){
                this.open = false
            },
            logOut(){
                this.token = false
                this.$store.commit("fnLogout")
                this.$router.push("/")
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header {
        text-align:center;
        padding:20px; 
        background:#ddd;
        position:relative; 
        .header__logo { padding:20px;
            @media screen and (max-width:768px){
                text-align:left; 
                padding:0; font-size:6vw
            }
        }
        .member {
            position:absolute; top:30px; left:30px; 
            a {
                margin-right:10px; 
            }
        }
        .itemcount { 
            position:absolute;
            top:20px; 
            right:30px; 
            font-size:30px; color:blue; 
            span {
                position:absolute;
                top:-2px; right:-5px; 
                width:20px; height:20px; border-radius:50%;
                background:red; color:#fff; 
                font-size:12px; line-height:20px;
                text-align:center; 
                font-weight:bold; 
            }
        }
        .openNav {
            position:absolute;
            top:20px; 
            right:80px; 
            font-size:30px; color:blue; 
            cursor:pointer;
            display:none; 
            @media screen and (max-width:768px) {
                display:block;
            }
        }
        #header__nav { 
            ul { display:flex; justify-content:space-around;
                li { margin:10px 0px; font-size:20px;
                    a { transition:all 0.5s;
                        &.router-link-exact-active { color:#f00 }
                        &:hover { color:#f00 }
                    }
                }
            }
            .closeNav { display:none }
            @media screen and (max-width:768px) {
                // display:none;
                transition:all 0.2s; 
                left:100%; overflow:hidden;
                position:fixed; top:0; right:0; bottom:0; 
                background:rgba(0,0,0,0.5); z-index:99999;
                ul { display:block; justify-content:left;
                    width:250px; height:100%; background:#fff;
                    position:absolute; top:0; right:-250px; 
                    padding-top:80px; transition:all 0.5s; 
                }
                &.on {
                    // display:block;
                    left:0; 
                    ul { right:0px; 
                        li { margin:0px 0px; font-size:20px;
                             border-top:1px solid #ddd; 
                             &:last-child { border-bottom:1px solid #ddd;  }
                            a { transition:all 0.5s;
                                display:block;  line-height:2.5em; 
                                &.router-link-exact-active { color:#f00 }
                                &:hover { color:#f00 }
                            }
                        }
                    }
                    .closeNav {
                        display:block;
                        position:absolute; top:20px; right:20px;
                        font-size:30px; color:blue; 
                    }
                }
            }
        }
    }
</style>