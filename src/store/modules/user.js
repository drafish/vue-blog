import * as types from '../mutation-types'
import api from '../../api'

const state = {
  detail: {}
}

// getters
const getters = {
  userDetail: state => state.detail
}

// actions
const actions = {

  getUserDetail ({ commit }, id) {
    api.getUserDetail({id}).then(res => {
      commit(types.SET_USER, res.data.data)
    })
  },
  async signin ({ commit }, data) {
    let res = await api.signin(data)
    commit(types.SET_USER, res.data.data)
  },
  async signup ({ commit }, data) {
    let res = await api.signup(data)
    commit(types.SET_USER, res.data.data)
  },
  signout ({ commit }, data) {
    api.signout().then(res => {
      commit(types.CLEAR_USER)
    })
  }
}

const mutations = {

  [types.SET_USER] (state, detail) {
    state.detail = detail
  },
  [types.CLEAR_USER] (state) {
    state.detail = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
