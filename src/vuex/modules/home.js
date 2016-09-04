import {SET_BLOGS} from '../mutation-types'

const state = {
  blogs: [],
  page: {}
}

const mutations = {
  [SET_BLOGS] (state, blogs, page) {
    state.blogs = blogs
    state.page = page
  }
}

export default {
  state,
  mutations
}
