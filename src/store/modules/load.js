import {SET_ISFETCH} from '../mutation-types'

const state = {
  isFetch: 0
}

const mutations = {
  [SET_ISFETCH] (state, isFetch) {
    state.isFetch = isFetch
  }
}

export default {
  state,
  mutations
}
