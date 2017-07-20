<template>
  <div id="app">
    <vheader></vheader>
    <div class="uk-container uk-container-center">
      <router-view class="uk-grid"></router-view>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import Vheader from '@/components/Vheader'
  import Vfooter from '@/components/Vfooter'
  import store from '@/vuex/store'

  export default {
    name: 'app',
    components: {
      Vheader,
      Vfooter
    },
    store
  }
</script>

<style>
a:hover, a:active {
    text-decoration: none;
}
</style>
