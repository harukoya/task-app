import {Auth, List, Task} from '../api'

export default {
  login({ commit }, authInfo) {
    throw new Error('login action should be implemented')
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
  }
}
