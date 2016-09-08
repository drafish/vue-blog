import Vue from 'vue'
import App from './App.vue'
import { smartDate } from './filters'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueHead from 'vue-head'

Vue.use(VueHead)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.filter('smartDate', smartDate)
const router = new VueRouter({
  history: true,
  hashbang: false
})

router.map({
  '/home': {
    name: 'home',
    component: function (resolve) {
      require(['./components/Home.vue'], resolve)
    }
  },
  '/login': {
    component: function (resolve) {
      require(['./components/Login.vue'], resolve)
    }
  },
  '/register': {
    component: function (resolve) {
      require(['./components/Register.vue'], resolve)
    }
  },
  '/blog/:id': {
    name: 'blog',
    component: function (resolve) {
      require(['./components/Blog.vue'], resolve)
    }
  },
  '/edit/:id': {
    component: function (resolve) {
      require(['./components/Edit.vue'], resolve)
    }
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
