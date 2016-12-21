<template>
  <label class="topcoat-radio-button">
    {{ text.left ? text.content : '' }}
    <input type="radio" name="topcoat" :disabled="disabled">
    <div class="topcoat-radio-button__checkmark"></div>
    {{ !text.left ? text.content : '' }}
  </label>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      text: {
        type: Object,
        default () {
          return {
            left: false,
            content: 'Label'
          }
        }
      }
    }
  }
</script>
