<template>
  <ul class="uk-pagination">
    <li>
      <a v-if="page.hasPrevious" :href="'?currentPage='+(page.pageIndex - 1)" v-on:click.prevent="gotoPage(page.pageIndex - 1)">上一页</a>
    </li>
    <li v-if="page.pageCount>1" :class="{'uk-active': page.pageIndex==1}">
      <span v-if="page.pageIndex==1" v-text="1"></span>
      <a v-else :href="'?currentPage=1'" v-on:click.prevent="gotoPage(1)" v-text="1"></a>
    </li>
    <li class="disabled" v-if="(page.pageIndex - 1) > 3"><span>...</span></li>
    <li :class="{'uk-active': page.pageIndex==i}" v-for="i in page.pageCount" v-show="(i > 1) && (Math.abs(i - page.pageIndex) < 3)">
      <span v-if="page.pageIndex==i" v-text="i"></span>
      <a v-else :href="'?currentPage='+i" v-on:click.prevent="gotoPage(i)" v-text="i"></a>
    </li>
    <li class="disabled" v-if="(page.pageCount - page.pageIndex) > 3"><span>...</span></li>
    <li :class="{'uk-active': page.pageIndex==page.pageCount}" v-if="page.pageCount > 1">
      <span v-if="page.pageIndex==page.pageCount" v-text="page.pageCount"></span>
      <a v-else :href="'?currentPage='+page.pageCount" v-on:click.prevent="gotoPage(page.pageCount)" v-text="page.pageCount"></a>
    </li>
    <li>
      <a v-if="page.hasNext" :href="'?currentPage='+(page.pageIndex*1 + 1)" v-on:click.prevent="gotoPage(page.pageIndex*1 + 1)">下一页</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['page'],
    methods: {
      gotoPage: function (page) {
        return this.$parent.getItems(page)
      }
    }
  }
</script>
