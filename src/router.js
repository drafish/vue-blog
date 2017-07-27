import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'
import ArticleDetail from '@/components/ArticleDetail'
import ArticleEdit from '@/components/ArticleEdit'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/edit/:id',
      name: 'ArticleEdit',
      component: ArticleEdit
    }
  ]
})
