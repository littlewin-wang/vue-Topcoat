<template>
  <button :class="['topcoat-button' + isLarge + isQuiet + isCta]">{{ text }}</button>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      large: {
        type: Boolean,
        default: false
      },
      quiet: {
        type: Boolean,
        default: false
      },
      cta: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: 'Button'
      }
    },
    computed: {
      isLarge: function () {
        return this.large ? '--large' : ''
      },
      isQuiet: function () {
        return (!this.cta && this.quiet) ? '--quiet' : ''
      },
      isCta: function () {
        return this.cta ? '--cta' : ''
      }
    }
  }
</script>
