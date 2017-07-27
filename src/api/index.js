import {ArticleResource, UserResource, CommentResource} from './resources'

export default {
  getArticleDetail: function (params) {
    return ArticleResource.get('detail', {params})
  },
  getArticleList: function (params) {
    return ArticleResource.get('list', {params})
  },
  addArticle: function (data) {
    return ArticleResource.post('add', data)
  },
  modifyArticle: function (data) {
    return ArticleResource.post('modify', data)
  },
  getUserDetail: function () {
    return UserResource.get('index')
  },
  signin: function (user) {
    return UserResource.put('signin', user)
  },
  signup: function (user) {
    return UserResource.post('signup', user)
  },
  signout: function () {
    return UserResource.delete('signout')
  },
  modifyUser: function (user) {
    return UserResource.put('modify', user)
  },
  modifyPassword: function (user) {
    return UserResource.put('password', user)
  },
  getCommentList: function (params) {
    return CommentResource.get('list', {params})
  },
  addComment: function (data) {
    return CommentResource.post('add', data)
  },
  modifyComment: function (data) {
    return CommentResource.put('modify', data)
  },
  deleteComment: function (params) {
    return CommentResource.delete('delete', {params})
  }
}
