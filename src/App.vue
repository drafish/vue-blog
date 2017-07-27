<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <div class="uk-container uk-container-center">
      <router-view class="uk-grid"></router-view>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from '@/components/HeaderBar'
  import FooterBar from '@/components/FooterBar'

  export default {
    name: 'app',
    components: {
      HeaderBar,
      FooterBar
    }
  }
</script>

<style>
a:hover, a:active {
    text-decoration: none;
}
</style>
