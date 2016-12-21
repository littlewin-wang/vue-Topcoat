<template>
  <input type="text" :class="['topcoat-text-input' + isLarge]" :placeholder="placeholder" value="" :pattern="pattern" :disabled="disabled">
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
        default: false
      },
      placeholder: {
        type: String,
        default: 'Text'
      },
      pattern: {
        type: String,
        default: '[A-z]{3}'
      }
    },
    computed: {
      isLarge: function () {
        return this.large ? '--large' : ''
      }
    }
  }
</script>
