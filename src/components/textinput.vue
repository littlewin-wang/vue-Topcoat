<template>
  <input type="text" :class="['topcoat-text-input' + isLarge]" :placeholder="placeholder" value="">
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean
      },
      placeholder: {
        type: String,
        default: 'Text'
      }
    },
    computed: {
      isLarge: function () {
        return this.large ? '--large' : ''
      }
    }
  }
</script>
