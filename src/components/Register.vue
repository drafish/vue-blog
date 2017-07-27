<template>
  <div class="uk-container-center uk-width-medium-1-3 uk-width-small-1-2">
    <h3 class="uk-text-center uk-margin-top">欢迎注册！</h3>
    <div class="uk-alert uk-alert-danger" v-if="message" v-text="message"></div>
    <form class="uk-form uk-form-stacked uk-panel uk-panel-box" v-on:submit.prevent="submit">
        <div class="uk-alert uk-alert-danger" hidden="hidden"></div>
        <div class="uk-form-row">
            <label class="uk-form-label uk-hidden-small">用户名:</label>
            <div class="uk-form-controls uk-form-icon">
                <i class="uk-icon-envelope-o"></i>
                <input class="uk-form-large uk-form-width-large" type="text" placeholder="用户名" maxlength="50" v-model="account">
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
            <label class="uk-form-label uk-hidden-small">确认密码:</label>
            <div class="uk-form-controls uk-form-icon">
                <i class="uk-icon-lock"></i>
                <input class="uk-form-large uk-form-width-large" type="password" placeholder="输入密码" maxlength="50" v-model="password1">
            </div>
        </div>
        <div class="uk-form-row">
            <button type="submit" class="uk-width-1-1 uk-button uk-button-primary uk-button-large"><i class="uk-icon-sign-in"></i> 注册</button>
        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'signup'
    ]),
    submit: async function () {
      if (this.account.trim() === '' || this.password === '') {
        this.message = '用户名或密码不能为空'
      } else {
        await this.signup({account: this.account, password: this.password})
        this.$router.go(-1)
      }
    }
  },
  data () {
    return {
      account: '',
      password: '',
      password1: '',
      message: ''
    }
  }
}
</script>
