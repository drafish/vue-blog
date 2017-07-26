import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const module = 'home/'

export const ArticleResource = Vue.resource(module + 'article{/action}')
export const UserResource = Vue.resource(module + 'user{/action}')
export const CommentResource = Vue.resource(module + 'comment{/action}')
