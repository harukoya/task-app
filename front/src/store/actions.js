import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({token, expiry}) => {
        commit(types.AUTH_LOGIN, {token, expiry})
      })
      .catch(err => { throw err })
  },

  fetchLists: ({commit, state}) => {
    return List.fetch(state.auth.token)
      .then(({lists}) => {
        commit(types.FETCH_ALL_TASKLIST, lists)
      })
      .catch(err => { throw err })
  },

  addTask({ commit, state }, { listId, name }) {
    return Task.add(state.auth.token, {listId, name})
      .then((task) => {
        commit(types.ADD_TASK, task)
      })
      .catch(err => { throw err })
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
