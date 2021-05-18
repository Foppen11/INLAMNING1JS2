import axios from 'axios'
import router from '@/router'

export default {
  state: {
    loggedIn: false,
    activeUser: null
  },
  getters: {
    loggedIn: state => state.loggedIn,
    activeUser: state => state.activeUser
  },
  mutations: {
    LOGIN_USER: (state, user) => {
      state.loggedIn = true,
      state.activeUser = user
    },
    LOGOUT_USER: state => {
      state.loggedIn = false,
      state.activeUser = null
    }
  },
  actions: {
    register: async ({dispatch}, _user) => {
      await axios.post('http://localhost:9999/api/users/register', _user)
      const user = {
        email: _user.email,
        password: _user.password
      }
      dispatch('login', user)
    },
    login: ({commit}, user) => {
      axios.post('http://localhost:9999/api/users/login', user)
      .then(res => {
        if(res.status === 200) {
          commit('LOGIN_USER', user.email)

          router.push('/')
          
        }
      })
    },
    logout: ({commit}) => {
      commit('LOGOUT_USER')
    }
  }
}