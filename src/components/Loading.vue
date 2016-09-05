<template>
    <div v-show="load" class="uk-width-1-1 uk-text-center">
        <span><i class="uk-icon-spinner uk-icon-large uk-icon-spin"></i> 正在加载...</span>
    </div>
</template>

<script>
export default {
  props: ['load']
}
</script>
