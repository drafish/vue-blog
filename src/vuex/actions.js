import * as types from './mutation-types'
import marked from 'marked'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/github.css'
import _ from 'lodash'

const formatPage = (itemCount, pageIndex, pageSize) => {
  let pageCount, offset, limit, hasNext, hasPrevious
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
  hasNext = pageIndex < pageCount
  hasPrevious = pageIndex > 1
  return {
    itemCount,
    pageIndex,
    pageSize,
    pageCount,
    offset: offset,
    limit: limit,
    hasNext,
    hasPrevious
  }
}

marked.setOptions({
  highlight: (code) => highlightjs.highlightAuto(code).value
})

export const setBlogs = function ({ dispatch }, currentPage, numsPerPage = 5) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.get('home/article/list', {
    params: {
      currentPage,
      numsPerPage
    }
  }).then(function (res) {
    for (let blog of res.data.data.data) {
      blog.content = marked(blog.content)
    }
    let page = _.pick(res.data.data, 'currentPage', 'numsPerPage', 'count', 'totalPages')
    page = formatPage(page.count, page.currentPage, page.numsPerPage)
    dispatch(types.SET_BLOGS, res.data.data.data, page)
    dispatch(types.SET_ISFETCH, 1)
  })
}

export const setUser = function ({ dispatch }) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.get('home/user/index').then(function (res) {
    dispatch(types.SET_USER, res.data.data)
    dispatch(types.SET_ISFETCH, 1)
  })
}

export const logout = function ({ dispatch }) {
  this.$http.get('home/user/signout').then(function (res) {
    dispatch(types.CLEAR_USER)
  })
}

export const setBlog = function ({ dispatch }) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.get('home/article/detail', {
    params: {
      id: this.$route.params.id
    }
  }).then(function (res) {
    res.data.data.marked = marked(res.data.data.content)
    dispatch(types.SET_BLOG, res.data.data)
    dispatch(types.SET_ISFETCH, 1)
  })
}

export const setComments = function ({ dispatch }, currentPage, numsPerPage = 5) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.get('home/comment/list', {
    params: {
      articleId: this.$route.params.id,
      currentPage,
      numsPerPage
    }
  }).then(function (res) {
    for (let comment of res.data.data.data) {
      comment.content = marked(comment.content)
    }
    let page = _.pick(res.data.data, 'currentPage', 'numsPerPage', 'count', 'totalPages')
    page = formatPage(page.count, page.currentPage, page.numsPerPage)
    dispatch(types.SET_COMMENTS, res.data.data.data, page)
    dispatch(types.SET_ISFETCH, 1)
  })
}

export const login = function ({ dispatch }, account, password) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.post('home/user/signin', {
    account: account.trim(),
    password
  }).then(function (res) {
    dispatch(types.SET_USER, res.data.data)
    dispatch(types.SET_ISFETCH, 1)
    this.$router.go(-1)
  })
}

export const register = function ({ dispatch }, account, password) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.post('home/user/signup', {
    account: account.trim(),
    password
  }).then(function (res) {
    dispatch(types.SET_USER, res.data.data)
    dispatch(types.SET_ISFETCH, 1)
    this.$router.go(-1)
  })
}

export const postComment = function ({ dispatch }, data) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.post('home/comment/add', data).then(function (res) {
    res.data.data.content = marked(res.data.data.content)
    dispatch(types.CONCAT_COMMENT, res.data.data)
    dispatch(types.SET_ISFETCH, 1)
  })
}

export const postBlog = function ({ dispatch }, data) {
  dispatch(types.SET_ISFETCH, 0)
  this.$http.post('home/article/add', data).then(function (res) {
    dispatch(types.SET_ISFETCH, 1)
    this.$router.push({name: 'Blog', params: { id: res.data.data.articleId }})
  })
}
