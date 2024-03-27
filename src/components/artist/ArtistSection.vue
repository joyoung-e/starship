<template>
    <section id="artistSection">
        <h3>{{ activeButton }}</h3>
        <div class="artist__wrap">
            <div class="artist__type">
                <button :class="{active : activeButton==artistMenu.menu1 }" @click="handleClick(artistMenu.menu1)">{{ artistMenu.menu1 }}</button>
                <button :class="{active : activeButton==artistMenu.menu2 }" @click="handleClick(artistMenu.menu2)">{{ artistMenu.menu2 }}</button>
                <button :class="{active : activeButton==artistMenu.menu3 }" @click="handleClick(artistMenu.menu3)">{{ artistMenu.menu3 }}</button>
                <button :class="{active : activeButton==artistMenu.menu4 }" @click="handleClick(artistMenu.menu4)">{{ artistMenu.menu4 }}</button>
            </div>
            <div class="artist__member">                          
                <div class="member__info" v-for="(item, index) in activeArtist.artistInfo" :key="index">
                    <a :href="item.link">
                        <figure class="member__photo">
                            <img :src="item.artistImg" :alt="item.title">
                        </figure>
                        <div class="member__desc">
                            <h4>{{ item.title }}</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:"ArtistSection",
        data(){
            return { 
                activeButton : '팝 (Pop)',
                artistMenu:{
                  menu1 : '팝 (Pop)',
                  menu2 : '발라드 (Ballad)',
                  menu3 : '힙합 (Hip-hop)',
                  menu4 : '알앤비 (R&B)'
                },
                artistData:[
                    { 
                        menu : "팝 (Pop)",
                        artistInfo: [ 
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"팝 크래비티", link:"#" },
                        ]
                    },
                    { 
                        menu : "발라드 (Ballad)",
                        artistInfo: [ 
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"발라드 크래비티", link:"#" },
                        ]
                    },
                    { 
                        menu : "힙합 (Hip-hop)",
                        artistInfo: [ 
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"힙합 크래비티", link:"#" },
                        ]
                    },
                    { 
                        menu : "알앤비 (R&B)",
                        artistInfo: [ 
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                            { artistImg : "./assets/image/p_cravity.jpg", title:"알앤비 크래비티", link:"#" },
                        ]
                    },
                ]
            }
        },
        computed:{
            activeArtist() {
                return this.artistData.find((item)=> item.menu == this.activeButton  )
            }
        },
        methods : {
            handleClick(menu){
                this.activeButton = menu
            }
        }
    }
</script>

<style lang="scss" scoped>
    #artistSection {
        max-width:1200px;
        margin:50px auto;
        h3 { text-align:center; font-size:30px; margin:50px 0; }
        .artist__wrap {
            .artist__type { 
                display:flex; justify-content:center; 
                button { margin:20px; padding:10px; border-radius:10px; 
                    transition:all 0.5s;
                    &.active { background:red; color:#fff }
                }
            }
            .artist__member { 
                display:flex; flex-wrap:wrap;
                .member__info { flex:0 0 23%; margin:20px 1%; 
                    a { display:block; 
                        .member__photo { 
                            img { width:100% } 
                        }
                    }
                }
            }
        }
        @media screen and (max-width:768px) {
             .artist__wrap {
                .artist__type { 
                    display:flex; justify-content:center; flex-wrap:wrap; 
                    button { margin:1px 4%; padding:10px; border-radius:10px; 
                        transition:all 0.5s;
                        flex:0 0 42%;
                        &.active { background:red; color:#fff }
                    }
                }
                .artist__member { 
                    display:flex; flex-wrap:wrap;
                    .member__info { flex:0 0 42%; margin:20px 4%; 
                        a { display:block; 
                            .member__photo { 
                                img { width:100% } 
                            }
                        }
                    }
                }
            }
        }
    }
</style>