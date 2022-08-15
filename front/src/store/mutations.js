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
  },

  [types.UPDATE_TASK](state, payload) {
    const task = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.id !== task.listId) {continue}
      for (let j = 0; j < list.items.length; j++) {
        const item = list.item[j]
        if (item.id === task.id) {
          item.name = task.name
          item.description = task.description
          break
        }
      }
    }
  },

  [types.REMOVE_TASK](state, payload) {
    const {id, listId} = payload
    for (let i = 0; i < state.board.lists.length; i++) {
      const list = state.board.lists[i]
      if (list.id !== listId) {continue}
      list.items = list.items.filter(item => item.id !== id)
    }
  },

  [types.MOVE_TASK_FROM](state, payload) {
    const {target, from} = payload
    state.dragging.target = target
    state.dragging.from = from
  },

  [types.MOVE_TO_TASK](state, payload) {
    const {target, to} = payload
    state.dragging.target = target
    state.dragging.to = to
  },

  [types.MOVE_TASK_DONE](state, payload) {
    const {target, from, to} = payload
    const getTaskList = (lists, id) => lists.find(list => list.id === id)

    state.dragging.target = null
    state.dragging.from = null
    state.dragging.to = null

    const fromTaskList = getTaskList(state.board.lists, from)
    const index = fromTaskList.items.findIndex(item => item.id === target)
    const task = fromTaskList.items[index]
    fromTaskList.items.splice(index, 1)

    task.listId = to

    const toTaskList = getTaskList(state.board.lists, to)
    toTaskList.items.push(task)
  },

  [types.AUTH_LOGOUT](state, payload) {
    state.auth = payload
  }
}
