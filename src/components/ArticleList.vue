<template>
  <div>
    <div class="uk-width-small-3-4">
        <div class="uk-article" v-for="article in articles">
            <h2><router-link :to="'/article/'+article.id" v-text="article.title"></router-link></h2>
            <p class="uk-article-meta">发表于<span>{{article.createTime|smartDate}}</span></p>
            <p><span v-html="article.content"></span></p>
        </div>
        <pagination :page="page" @changePage="changePage"></pagination>

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
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    user: 'userDetail',
    articles: 'articleList',
    page: 'articlePage'
  }),
  methods: {
    ...mapActions([
      'getArticleList'
    ]),
    changePage: function () {
      this.getArticleList({currentPage: arguments[0], numsPerPage: 5})
    }
  },
  components: {
    Pagination
  },
  mounted: function () {
    this.getArticleList({currentPage: 1, numsPerPage: 5})
  }
}
</script>
