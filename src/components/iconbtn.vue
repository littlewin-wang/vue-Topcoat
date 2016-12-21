<template>
  <button :class="['topcoat-button' + isLarge + isQuiet]">
    <span :class="['topcoat-icon' + isLarge]" style="background-color:#A5A7A7;"></span>
  </button>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean
      },
      quiet: {
        type: Boolean
      }
    },
    computed: {
      isLarge: function () {
        return this.large ? '--large' : ''
      },
      isQuiet: function () {
        return this.quiet ? '--quiet' : ''
      }
    }
  }
</script>
