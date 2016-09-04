<template>
    <div class="uk-width-medium-3-4">
        <form v-on:submit.prevent="submit" class="uk-form uk-form-stacked">
            <div class="uk-alert uk-alert-danger uk-hidden"></div>
            <div class="uk-form-row">
                <label class="uk-form-label">标题:</label>
                <div class="uk-form-controls">
                    <input v-model="title" type="text" placeholder="标题" class="uk-width-1-1">
                </div>
            </div>
            <div class="uk-form-row">
                <label class="uk-form-label">内容:</label>
                <div class="uk-form-controls">
                    <textarea id="div1" v-model="content" placeholder="内容" class="uk-width-1-1" style="height:400px;max-height:500px;"></textarea>
                    <div v-html="preview"></div>
                </div>
            </div>
            <div class="uk-form-row">
                <button type="submit" class="uk-button uk-button-primary"><i class="uk-icon-save"></i> 保存</button>
                <a v-link="'/blog/'+blog.id" class="uk-button"><i class="uk-icon-times"></i> 取消</a>
            </div>
        </form>
    </div>
</template>

<script>
import marked from 'marked'
import { setBlog, postBlog } from '../vuex/actions'
import { getUser, getBlog } from '../vuex/getters'
export default {
  vuex: {
    actions: {
      setBlog: setBlog,
      postBlog: postBlog
    },
    getters: {
      user: getUser,
      blog: getBlog
    }
  },
  ready () {
    if (this.$route.params.id !== 'new') {
      this.setBlog()
      this.title = this.blog.title
      this.content = this.blog.content
    }
  },
  computed: {
    preview: function () {
      let _content = this.content
      marked(_content, (err, content) => {
        if (!err) {
          _content = content
        }
      })
      return _content
    }
  },
  methods: {
    submit: function () {
      this.postBlog({
        id: this.$route.params.id,
        title: this.title,
        content: this.content
      })
    }
  },
  data () {
    return {
      title: '',
      content: ''
    }
  }
}
</script>
