import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ActorView from '@/views/ActorView.vue'
import ArtistView from '@/views/ArtistView.vue'
import ProductView from '@/views/ProductView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import MovieView from '@/views/MovieView.vue'
import TheaterView from '@/views/TheaterView.vue'
import CartView from '@/views/CartView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import JoinView from '@/views/JoinView.vue'
import MemberModifyView from '@/views/MemberModifyView.vue'
import CommunityListView from '@/views/CommunityListView.vue'
import CommunityWriteView from '@/views/CommunityWriteView.vue'
import CommunityModifyView from '@/views/CommunityModifyView.vue'
import CommunityDetailView from '@/views/CommunityDetailView.vue'


Vue.use(Router)

export default new Router({
    mode:'history',
     // 개발할때는 아래코드를 주석처리하고, build 할때는 주석을 풀어줌
    base: '/staeship1',
    routes:[ 
        { path:"/", name:"home", component : HomeView },
        { path:"/actor", name:"actor", component : ActorView }, 
        { path:"/movie", name:"movie", component : MovieView }, 
        { path:"/theater", name:"theater", component : TheaterView },
        { path:"/artist", name:"artist", component : ArtistView },
        { path:"/product", name:"product", component : ProductView },
        { path:"/product/:id", name:"Id", component : ProductDetailView },
        { path:"/cart", name:"cart", component : CartView },
        { path:"/aboutus", name:"aboutus", component : AboutUsView },
        { path:"/login", name:"login", component : LoginView },
        { path:"/join", name:"join", component : JoinView },
        { path:"/memberModify", name:"memberModify", component : MemberModifyView },
        { path:"/communityList", name:"communityList", component : CommunityListView },
        { path:"/communityWrite", name:"communityWrite", component : CommunityWriteView },
        { path:"/communityModify/:id", name:"communityModify", component : CommunityModifyView },
        { path:"/communityDetail/:id", name:"communityDetail", component : CommunityDetailView },
    ]
})