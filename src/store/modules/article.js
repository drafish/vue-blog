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
  detail: {user: {}},
  list: [],
  page: {}
}

// getters
const getters = {
  articleDetail: state => state.detail,
  articleList: state => state.list,
  articlePage: state => state.page
}

// actions
const actions = {
  getArticleList ({ commit }, params) {
    api.getArticleList(params).then(res => {
      res.data.data.data.map(item => {
        item.content = marked(item.content)
      })
      let page = _.pick(res.data.data, 'currentPage', 'numsPerPage', 'count', 'totalPages')
      page = formatPage(page.count, page.currentPage, page.numsPerPage)
      commit(types.SET_ARTICLES, {list: res.data.data.data, page})
    })
  },
  getArticleDetail ({ commit }, id) {
    api.getArticleDetail({id}).then(res => {
      res.data.data.marked = marked(res.data.data.content)
      commit(types.SET_ARTICLE, res.data.data)
    })
  },
  addArticle ({ commit }, data) {
    api.addArticle(data).then(res => {
      this.$router.push({name: 'Blog', params: { id: res.data.data.articleId }})
    })
  },
  modifyArticle ({ commit }, data) {
    api.modifyArticle(data).then(res => {
      this.$router.go(-1)
    })
  }
}

const mutations = {

  [types.SET_ARTICLE] (state, detail) {
    state.detail = detail
  },
  [types.SET_ARTICLES] (state, {list, page}) {
    state.list = list
    state.page = page
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
