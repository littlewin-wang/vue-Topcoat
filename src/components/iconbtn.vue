<template>
  <button :class="['topcoat-button' + isLarge + isQuiet]" :disabled="disabled">
    <span :class="['topcoat-icon' + isLarge]" style="background-color:#A5A7A7;"></span>
  </button>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      quiet: {
        type: Boolean,
        default: false
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
