import Vue from 'vue'
import Vuex from 'vuex'

import list from './modules/list'
import user from './modules/user'
import cart from './modules/cart'
import details from './modules/details'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    details,
    list,
    user,
    cart
  }
})