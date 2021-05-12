import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products'
import cart from './modules/cart'
import user from './modules/user'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products,
    cart,
    user,
    order
  }
})
