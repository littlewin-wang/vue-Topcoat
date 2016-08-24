<template>
  <button :class="['topcoat-button' + isLarge + isQuiet + isCta]">{{ text }}</button>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean
    },
    quiet: {
      type: Boolean
    },
    cta: {
      type: Boolean
    },
    text: {
      type: String,
      default: 'Button'
    }
  },
  computed: {
    isLarge: function() {
      return this.large ? '--large' : '' 
    },
    isQuiet: function() {
      return (!this.cta && this.quiet) ? '--quiet' : '' 
    },
    isCta: function() {
      return this.cta ? '--cta' : ''
    }
  }
}
</script>
