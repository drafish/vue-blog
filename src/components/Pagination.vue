<template>
  <ul class="uk-pagination">
    <li v-show="page.pageIndex > 1">
      <span class="small-hand" @click="gotoPage(page.pageIndex - 1)">上一页</span>
    </li>
    <li v-show="page.pageCount > 1" :class="{'uk-active': page.pageIndex == 1}">
      <span @click="gotoPage(1)" :class="page.pageIndex == 1?'':'small-hand'">1</span>
    </li>
    <li class="disabled" v-show="(page.pageIndex - 1) > 3">
      <span>...</span>
    </li>
    <li :class="{'uk-active': page.pageIndex == i}" v-for="i in page.pageCount" v-show="(i > 1) && (i < page.pageCount) && (Math.abs(i - page.pageIndex) < 3)">
      <span @click="gotoPage(i)" :class="page.pageIndex == i?'':'small-hand'">{{i}}</span>
    </li>
    <li class="disabled" v-show="(page.pageCount - page.pageIndex) > 3">
      <span>...</span>
    </li>
    <li :class="{'uk-active': page.pageIndex == page.pageCount}" v-show="page.pageCount > 1">
      <span @click="gotoPage(page.pageCount)" :class="page.pageIndex == page.pageCount?'':'small-hand'">{{page.pageCount}}</span>
    </li>
    <li v-show="page.pageIndex < page.pageCount">
      <span class="small-hand" @click="gotoPage(page.pageIndex*1 + 1)">下一页</span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['page'],
    methods: {
      gotoPage: function (pageIndex) {
        if (pageIndex === this.page.pageIndex) {
          console.log('当前页')
        } else {
          this.$emit('changePage', pageIndex)
        }
      }
    }
  }
</script>

<style scoped>
  .small-hand{
    cursor: pointer;
  }
</style>
