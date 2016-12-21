<template>
  <label class="topcoat-checkbox">
    <input type="checkbox" :disabled="disabled">
    <div class="topcoat-checkbox__checkmark"></div>
    {{ text }}
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
        type: String,
        default: 'CheckBox'
      }
    }
  }
</script>
