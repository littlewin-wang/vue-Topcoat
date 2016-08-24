<template>
  <label class="topcoat-radio-button">
    <input type="radio" name="topcoat">
    <div class="topcoat-radio-button__checkmark"></div>
    {{ item }}
  </label>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: 'radio'
    }
  }
}
</script>