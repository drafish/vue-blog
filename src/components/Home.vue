<template>

    <div class="uk-width-small-3-4">
        <article class="uk-article" v-for="blog in blogs">
            <h2><a v-link="'/blog/'+blog._id" v-text="blog.title"></a></h2>
            <p class="uk-article-meta">发表于<span v-text="blog.create_time|smartDate"></span></p>
            <p><span v-html="blog.content"></span></p>
        </article>
        <pagination v-bind:page="page"></pagination>
        
    </div>

    <div v-show="user" class="uk-width-small-1-4">
        <div class="uk-panel uk-panel-header">
            <ul class="uk-list uk-list-line">
                <li><i class="uk-icon-pencil-square-o"></i> <a v-link="'/edit/new'">新文章</a></li>
                
            </ul>
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
  ready () {
    this.getItems(1)
  }
}
</script>
