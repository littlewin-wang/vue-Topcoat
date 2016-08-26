<template>
  <label class="topcoat-switch">
    <input type="checkbox" class="topcoat-switch__input" :checked="isCheck">
    <div class="topcoat-switch__toggle"></div>
  </label>
</template>
<script>
export default {
  props: {
    check: {
      type: String,
      default: ''
    }
  },
  computed: {
    isCheck: function() {
      return this.check === 'checked' ? 'checked' : '' 
    }
  }
}
</script>