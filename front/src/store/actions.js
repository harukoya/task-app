import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({token, client, uid, expiry}) => {
        commit(types.AUTH_LOGIN, {token, client, uid, expiry})
      })
      .catch(err => { throw err })
  },
  fetchLists({ commit }) {
    throw new Error("fetchLists should be implemented")
  },
  addTask({commit}, taskInfo) {
    throw new Error("addTask should be implemented")
  },
  updateTask({commit}, taskInfo) {
    throw new Error("updateTask action should be implemented")
  },
  removeTask({commit}, removeTask) {
    throw new Error("removeTask action should be implemented")
  },
  logout({commit}, authInfo) {
    throw new Error("logout action should be implemented")
  },
  setMessage({ commit }, message) {
    commit(types.MESSAGE, message)
  },
  clearNoticeMessage({commit}) {
    commit(types.CLEAR_NOTICE_MESSAGE)
  }
}
