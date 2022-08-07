import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  auth: {
    token: null,
    client: null,
    uid: null,
    expiry: null
  },
  board: {
    lists: []
  },
  message: {
    notice: '',
    error: ''
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
