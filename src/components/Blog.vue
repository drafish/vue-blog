<template>
<div class="uk-width-medium-3-4">
        <div class="uk-grid-margin" >
            <div class="uk-width-1-1">
                <article class="uk-article">
                <h2 v-text="blog.title"></h2>
                <p class="uk-article-meta">发表于<span v-text="blog.create_time|smartDate"></span></p>
                <p><span v-html="blog.marked"></span></p>
                </article>
                <a v-show="blog.user.username === user.username" v-link="'/edit/'+blog._id">编辑</a><br/><br/>
            </div>
        </div>
        <div class="uk-container uk-padding-remove">
            <div class="uk-width-1-1 uk-margin-large-top">

                <article v-show="user" class="uk-comment">
                    <header class="uk-comment-header">
                        <img class="uk-comment-avatar uk-border-circle" width="50" height="50" :src="user.image">
                        <h4 class="uk-comment-title" v-text="user.nickname"></h4>
                    </header>
                    <div class="uk-comment-body">
                        <div class="uk-alert uk-alert-danger" v-if="message" v-text="message"></div>
                        <form class="uk-form" v-on:submit.prevent="submit">
                            <div class="uk-alert uk-alert-danger uk-hidden"></div>
                            <div class="uk-form-row">
                                <textarea rows="6" placeholder="说点什么吧" style="width:100%;resize:none;" v-model="comment"></textarea>
                            </div>
                            <div class="uk-form-row">
                                <button type="submit" class="uk-button uk-button-primary"><i class="uk-icon-comment"></i> 发表评论</button>
                            </div>
                        </form>
                    </div>
                </article>

                <hr class="uk-article-divider">
                <h3>最新评论</h3>

                <ul class="uk-comment-list">

                    <li v-if="comments.length > 0">
                        <article class="uk-comment" v-for="comment in comments">
                            <header class="uk-comment-header">
                                <a><img class="uk-comment-avatar uk-border-circle" width="50" height="50" :src="comment.user.image"></a>
                                <h4 class="uk-comment-title"><span v-text="comment.user.nickname"></span><span v-if="comment.user.username === blog.user.username">(作者)</span></h4>
                                <p class="uk-comment-meta"><span v-text="comment.create_time|smartDate"></span></p>
                            </header>
                            <div class="uk-comment-body">
                                <span v-html="comment.content"></span>
                            </div>
                        </article>
                        
                    </li>

                    <p v-else>还没有人评论...</p>

                </ul>
            </div>
            <pagination v-bind:page="page"></pagination>
        </div>
    </div>

    <div class="uk-width-medium-1-4">
        <div class="uk-panel uk-panel-box">
            <a><div class="uk-text-center">
                <img class="uk-border-circle" width="120" height="120" :src="blog.user.image">
                <h3 v-text="blog.user.nickname"></h3>
            </div></a>
        </div>
    </div>
</template>

<script>
import Pagination from './Pagination'
import { setBlog, setComments, postComment } from '../vuex/actions'
import { getUser, getBlog, getComments, getCPage } from '../vuex/getters'
export default {
  vuex: {
    actions: {
      setBlog: setBlog,
      getItems: setComments,
      postComment: postComment
    },
    getters: {
      user: getUser,
      blog: getBlog,
      comments: getComments,
      page: getCPage
    }
  },
  components: {
    Pagination
  },
  ready () {
    this.setBlog()
    this.getItems(1)
  },
  methods: {
    submit: function () {
      if (this.comment.trim() === '') {
        this.message = '评论不能为空'
      } else {
        this.postComment({
          id: this.$route.params.id,
          content: this.comment
        })
        this.comment = ''
      }
    }
  },
  data () {
    return {
      comment: '',
      message: ''
    }
  }
}
</script>
