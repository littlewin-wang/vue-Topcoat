<template>
  <input type="search" value="" :placeholder="placeholder" :class="['topcoat-search-input' + isLarge]" :disabled="disabled">
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: true
      },
      large: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: 'Search'
      }
    },
    computed: {
      isLarge: function () {
        return this.large ? '--large' : ''
      }
    }
  }
</script>
