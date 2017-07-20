<template>
  <div>
    <div class="uk-width-small-3-4">
        <div class="uk-article" v-for="blog in blogs">
            <h2><router-link :to="'/blog/'+blog.id" v-text="blog.title"></router-link></h2>
            <p class="uk-article-meta">发表于<span>{{blog.createTime|smartDate}}</span></p>
            <p><span v-html="blog.content"></span></p>
        </div>
        <pagination v-bind:page="page"></pagination>

    </div>

    <div v-show="user.id" class="uk-width-small-1-4">
        <div class="uk-panel uk-panel-header">
            <ul class="uk-list uk-list-line">
                <li><i class="uk-icon-pencil-square-o"></i> <router-link to="/edit/new">新文章</router-link></li>

            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Pagination from './Pagination'
import { setBlogs } from '../vuex/actions'
import { getUser, getBlogs, getBPage } from '../vuex/getters'
export default {
  vuex: {
    actions: {
      getItems: setBlogs
    },
    getters: {
      user: getUser,
      blogs: getBlogs,
      page: getBPage
    }
  },
  components: {
    Pagination
  },
  mounted: function () {
    this.getItems(1)
  }
}
</script>
