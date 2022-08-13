import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    state.auth = payload
  },

  [types.MESSAGE](state, payload) {
    state.message = payload
  },

  [types.CLEAR_NOTICE_MESSAGE](state) {
    state.message.notice = ''
  },

  [types.FETCH_ALL_TASKLIST](state, payload) {
    state.board.lists = payload
  },

  [types.ADD_TASK](state, payload) {
    const task = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.id === task.listId) {
        list.items.push(task)
        break
      }
    }
  }
}
