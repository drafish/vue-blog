<template>
  <vheader></vheader>
  <div class="uk-container uk-container-center">
    <div class="uk-grid">
      <router-view></router-view>          
    </div>
  </div>
  <vfooter></vfooter>
</template>

<script type="text/babel">
  import Vheader from './components/Vheader'
  import Vfooter from './components/Vfooter'
  import store from './vuex/store'

  export default {
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
