import marked from 'marked'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/github.css'
import _ from 'lodash'
import * as types from '../mutation-types'
import api from '../../api'

marked.setOptions({
  highlight: (code) => highlightjs.highlightAuto(code).value
})

const formatPage = (itemCount, pageIndex, pageSize) => {
  let pageCount, offset, limit
  pageCount = parseInt(itemCount / pageSize)
  if (itemCount % pageSize > 0) {
    pageCount = pageCount + 1
  }
  if (itemCount === 0 || pageIndex > pageCount) {
    offset = 0
    limit = 0
    pageIndex = 1
  } else {
    offset = pageSize * (pageIndex - 1)
    limit = parseInt(pageSize)
  }
  return {
    itemCount,
    pageIndex,
    pageSize,
    pageCount,
    offset: offset,
    limit: limit
  }
}

const state = {
  list: [],
  page: {}
}

// getters
const getters = {
  commentList: state => state.list,
  commentPage: state => state.page
}

// actions
const actions = {
  getCommentList ({ commit }, params) {
    api.getCommentList(params).then(res => {
      res.data.data.data.map(item => {
        item.content = marked(item.content)
      })
      let page = _.pick(res.data.data, 'currentPage', 'numsPerPage', 'count', 'totalPages')
      page = formatPage(page.count, page.currentPage, page.numsPerPage)
      commit(types.SET_COMMENTS, {list: res.data.data.data, page})
    })
  },
  addComment ({ commit }, data) {
    api.addComment(data).then(res => {
      res.data.data.content = marked(res.data.data.content)
      commit(types.CONCAT_COMMENT, res.data.data)
    })
  }
}

const mutations = {

  [types.SET_COMMENTS] (state, {list, page}) {
    state.list = list
    state.page = page
  },
  [types.CONCAT_COMMENT] (state, comment) {
    state.list.unshift(comment)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
