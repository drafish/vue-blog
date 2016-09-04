import {SET_BLOG, SET_COMMENTS, CONCAT_COMMENT} from '../mutation-types'

const state = {
  blog: {},
  comments: [],
  page: {}
}

const mutations = {

  [SET_BLOG] (state, blog) {
    state.blog = blog
  },
  [SET_COMMENTS] (state, comments, page) {
    state.comments = comments
    state.page = page
  },
  [CONCAT_COMMENT] (state, comment) {
    state.comments = comment.concat(state.comments)
  }
}

export default {
  state,
  mutations
}
