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
  }
}
