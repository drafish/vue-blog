import * as types from './mutation-types'
import { API_ROOT } from '../config'
import marked from 'marked'
import highlightjs from 'highlight.js'
import 'highlight.js/styles/github.css'
marked.setOptions({
  highlight: (code) => highlightjs.highlightAuto(code).value
})
export const setBlogs = function ({ dispatch }, page, size = 5) {
  this.$http.get(API_ROOT + 'api/blogs', {
    params: {
      page: page,
      size: size
    }
  }).then(function (res) {
    for (let blog of res.data.blogs) {
      blog.content = marked(blog.content)
    }
    dispatch(types.SET_BLOGS, res.data.blogs, res.data.page)
  }).then(function (err) {
    console.log(err)
  })
}
export const setUser = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/user', {
    headers: {
      token: window.localStorage.getItem('token')
    }
  }).then(function (res) {
    dispatch(types.SET_USER, res.data.user)
  }).then(function (err) {
    console.log(err)
  })
}
export const logout = ({ dispatch }) => {
  window.localStorage.clear()
  dispatch(types.CLEAR_USER)
}
export const setBlog = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/blog', {
    params: {
      _id: this.$route.params.id
    }
  }).then(function (res) {
    res.data.blog.marked = marked(res.data.blog.content)
    dispatch(types.SET_BLOG, res.data.blog)
  }).then(function (err) {
    console.log(err)
  })
}
export const setComments = function ({ dispatch }, page, size = 5) {
  this.$http.get(API_ROOT + 'api/comment', {
    params: {
      id: this.$route.params.id,
      page: page,
      size: size
    }
  }).then(function (res) {
    for (let comment of res.data.comments) {
      comment.content = marked(comment.content)
    }
    dispatch(types.SET_COMMENTS, res.data.comments, res.data.page)
  }).then(function (err) {
    console.log(err)
  })
}
export const login = function ({ dispatch }, username, password) {
  this.$http.post(API_ROOT + 'api/login', {
    username: this.username.trim(),
    password: this.password
  }).then(function (res) {
    dispatch(types.SET_USER, res.data.user)
    window.localStorage.setItem('token', res.data.token)
    this.$route.router.go(-1)
  }).then(function (err) {
    console.log(err)
  })
}
export const register = function ({ dispatch }, username, password) {
  this.$http.post(API_ROOT + 'api/register', {
    username: this.username.trim(),
    password: this.password
  }).then(function (res) {
    dispatch(types.SET_USER, res.data.user)
    window.localStorage.setItem('token', res.data.token)
    this.$route.router.go(-1)
  }).then(function (err) {
    console.log(err)
  })
}
export const postComment = function ({ dispatch }, data) {
  this.$http.post(API_ROOT + 'api/comment', data, {
    headers: {
      token: window.localStorage.getItem('token')
    }
  }).then(function (res) {
    res.data.comment[0].content = marked(res.data.comment[0].content)
    dispatch(types.CONCAT_COMMENT, res.data.comment)
  }).then(function (err) {
    console.log(err)
  })
}
export const postBlog = function ({ dispatch }, data) {
  this.$http.post(API_ROOT + 'api/blog', data, {
    headers: {
      token: window.localStorage.getItem('token')
    }
  }).then(function (res) {
    this.$route.router.go({name: 'blog', params: { id: res.data.blog_id }})
  }).then(function (err) {
    console.log(err)
  })
}
