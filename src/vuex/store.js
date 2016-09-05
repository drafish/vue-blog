import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import header from './modules/header'
import blog from './modules/blog'
import load from './modules/load'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    home,
    header,
    blog,
    load
  }
})
