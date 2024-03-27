import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import modProduct from '@/store/product'
import modMovie from '@/store/movie'
import modMember from '@/store/member'
import modBoard from '@/store/board'

Vue.use(Vuex)

export default new Vuex.Store({
   modules : {
     modProduct,
     modMovie,
     modMember,
     modBoard,
   },
   plugins : [
      (new VuexPersistence({ storage:window.localStorage })).plugin
   ]
})