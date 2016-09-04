<template>
  <nav class="uk-navbar uk-navbar-attached uk-margin-bottom">
        <div class="uk-container uk-container-center">
            <a v-link="'/home'" class="uk-navbar-brand">Awesome</a>
            <ul class="uk-navbar-nav">
                <li><a v-link="'/home'"><i class="uk-icon-home"></i> 主页</a></li>
                <li><a href="https://github.com/xwlyy/vue-blog" target="_blank"><i class="uk-icon-code"></i> 前端源码</a></li>
                <li><a href="https://github.com/xwlyy/thinkjs-blog" target="_blank"><i class="uk-icon-code"></i> 后端源码</a></li>
            </ul>
            <div class="uk-navbar-flip">
                <ul v-show="user" class="uk-navbar-nav">
                    <li class="uk-parent" data-uk-dropdown>
                        <a><i v-text="' '+user.nickname" class="uk-icon-user"></i></a>
                        <div class="uk-dropdown uk-dropdown-navbar">
                            <ul class="uk-nav uk-nav-navbar">
                                <li><a v-on:click="logout" href="javascript:;"><i class="uk-icon-sign-out"></i> 登出</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul v-else class="uk-navbar-nav">
                    <li><a v-link="'/login'"><i class="uk-icon-sign-in"></i> 登陆</a></li>
                    <li><a v-link="'/register'"><i class="uk-icon-edit"></i> 注册</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { setUser, logout } from '../vuex/actions'
import { getUser } from '../vuex/getters'
export default {
  vuex: {
    actions: {
      setUser: setUser,
      logout: logout
    },
    getters: {
      user: getUser
    }
  },
  ready () {
    this.setUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
