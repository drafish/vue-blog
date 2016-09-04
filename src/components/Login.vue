<template>

    <div class="uk-container-center uk-width-medium-1-3 uk-width-small-1-2">
    <h3 class="uk-text-center uk-margin-top">欢迎回来！</h3>
    <form class="uk-form uk-form-stacked uk-panel uk-panel-box" v-on:submit.prevent="submit">
        <div class="uk-alert uk-alert-danger" hidden="hidden"></div>
        <div class="uk-form-row">
            <label class="uk-form-label uk-hidden-small">用户名:</label>
            <div class="uk-form-controls uk-form-icon">
                <i class="uk-icon-envelope-o"></i>
                <input class="uk-form-large uk-form-width-large" type="text" placeholder="用户名" maxlength="50" v-model="username">
            </div>
        </div>
        <div class="uk-form-row">
            <label class="uk-form-label uk-hidden-small">输入密码:</label>
            <div class="uk-form-controls uk-form-icon">
                <i class="uk-icon-lock"></i>
                <input class="uk-form-large uk-form-width-large" type="password" placeholder="输入密码" maxlength="50" v-model="password">
            </div>
        </div>
        <div class="uk-form-row">
            <button type="submit" class="uk-width-1-1 uk-button uk-button-primary uk-button-large"><i class="uk-icon-sign-in"></i> 登录</button>
        </div>
    </form>
</div>
</template>

<script>
import { login } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      login: login
    }
  },
  methods: {
    submit: function () {
      this.login(this.username, this.password)
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
