import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  auth: {
    token: localStorage.getItem('token'),
    expiry: null
  },
  board: {
    lists: []
  },
  message: {
    notice: '',
    error: ''
  },
  dragging: {
    target: null,
    from: null,
    to: null
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
