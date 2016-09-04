<template>
  <ul class="uk-pagination">
    <li>
      <a v-show="page.has_previous" :href="'?page='+(page.page_index - 1)+page.top" v-on:click.prevent="gotoPage(page.page_index - 1, page.top)">上一页</a>
    </li>
    <li v-show="page.page_count>1" :class="{'uk-active': page.page_index==1}">
      <span v-show="page.page_index==1" v-text="1"></span>
      <a v-else :href="'?page=1'+page.top" v-on:click.prevent="gotoPage(1, page.top)" v-text="1"></a>
    </li>
    <li class="disabled" v-show="(page.page_index - 1) > 3"><span>...</span></li>
    <li :class="{'uk-active': page.page_index==i}" v-for="i in page.page_count | filterBy vaildPage">
      <span v-show="page.page_index==i" v-text="i"></span>
      <a v-else :href="'?page='+i+page.top" v-on:click.prevent="gotoPage(i, page.top)" v-text="i"></a>
    </li>
    <li class="disabled" v-show="(page.page_count - page.page_index) > 3"><span>...</span></li>
    <li :class="{'uk-active': page.page_index==page.page_count}" v-show="page.page_count > 1">
      <span v-show="page.page_index==page.page_count" v-text="page.page_count"></span>
      <a v-else :href="'?page='+page.page_count+page.top" v-on:click.prevent="gotoPage(page.page_count, page.top)" v-text="page.page_count"></a>
    </li>
    <li>    
      <a v-show="page.has_next" :href="'?page='+(page.page_index*1 + 1)+page.top" v-on:click.prevent="gotoPage(page.page_index*1 + 1, page.top)">下一页</a>
    </li>
  </ul>
</template>

<script type="text/babel">
export default {
  props: ['page'],
  methods: {
    vaildPage: function (i) {
      return (i > 1) && (Math.abs(i - this.page.page_index) < 3)
    },
    gotoPage: function (page) {
      return this.$parent.getItems(page)
    }
  }
}
</script>
