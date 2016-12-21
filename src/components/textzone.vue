<template>
  <textarea :class="['topcoat-text-input' + isLarge]" :placeholder="placeholder" :rows="size.rows" :cols="size.cols" value="">
  </textarea>
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
      },
      size: {
        type: Object,
        default: function () {
          return { rows: 4, cols: 20 }
        }
      }
    },
    computed: {
      isLarge: function () {
        return this.large ? '--large' : ''
      }
    }
  }
</script>
