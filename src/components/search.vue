<template>
  <input type="search" value="" :placeholder="placeholder" :class="['topcoat-search-input' + isLarge]">
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean
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
