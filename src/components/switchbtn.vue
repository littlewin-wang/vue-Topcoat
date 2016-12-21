<template>
  <label class="topcoat-switch">
    <input type="checkbox" class="topcoat-switch__input" :checked="checked" :disabled="disabled">
    <div class="topcoat-switch__toggle"></div>
  </label>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
