import {SET_USER, CLEAR_USER} from '../mutation-types'

const state = {
  user: {}
}

const mutations = {
  [SET_USER] (state, user) {
    state.user = user
  },
  [CLEAR_USER] (state) {
    state.user = {}
  }
}

export default {
  state,
  mutations
}
