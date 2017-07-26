import {ArticleResource, UserResource, CommentResource} from './resources'

export default {
  getArticleDetail: function (params) {
    return ArticleResource.get({action: 'detail', ...params})
  },
  getArticleList: function (params) {
    return ArticleResource.get({action: 'list', ...params})
  },
  addArticle: function (data) {
    return ArticleResource.save({action: 'add'}, data)
  },
  modifyArticle: function (data) {
    return ArticleResource.save({action: 'modify'}, data)
  },
  getUserDetail: function () {
    return UserResource.get({action: 'index'})
  },
  signin: function (user) {
    return UserResource.update({action: 'signin'}, user)
  },
  signup: function (user) {
    return UserResource.save({action: 'signup'}, user)
  },
  signout: function () {
    return UserResource.remove({action: 'signout'})
  },
  modifyUser: function (user) {
    return UserResource.update({action: 'modify'}, user)
  },
  modifyPassword: function (user) {
    return UserResource.update({action: 'password'}, user)
  },
  getCommentList: function (params) {
    return CommentResource.get({action: 'list', ...params})
  },
  addComment: function (data) {
    return CommentResource.save({action: 'add'}, data)
  },
  modifyComment: function (data) {
    return CommentResource.update({action: 'modify'}, data)
  },
  deleteComment: function (params) {
    return CommentResource.remove({action: 'delete', ...params})
  }
}
