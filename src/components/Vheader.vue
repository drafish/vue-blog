<template>
  <div>
    <nav class="uk-navbar uk-navbar-attached uk-margin-bottom">
        <div class="uk-container uk-container-center">
            <ul class="uk-navbar-nav">
                <li><router-link to="/"><i class="uk-icon-home"></i> 主页</router-link></li>
            </ul>
            <div class="uk-navbar-flip">
                <ul v-if="user.id" class="uk-navbar-nav">
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
                    <li><router-link to="/login"><i class="uk-icon-sign-in"></i> 登陆</router-link></li>
                    <li><router-link to="/register"><i class="uk-icon-edit"></i> 注册</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
    <loading v-bind:load="!isFetch"></loading>
  </div>
</template>

<script>
import Loading from './Loading'
import { setUser, logout } from '../vuex/actions'
import { getUser, getIsFetch } from '../vuex/getters'
export default {
  vuex: {
    actions: {
      setUser: setUser,
      logout: logout
    },
    getters: {
      user: getUser,
      isFetch: getIsFetch
    }
  },
  components: {
    Loading
  },
  mounted: function () {
    this.setUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
