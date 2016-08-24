<template>
  <div class="topcoat-button-bar">
    <div class="topcoat-button-bar__item" v-for="item in list">
      <button :class="['topcoat-button-bar__button' + pretype]">{{ item }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: ['One', 'Two', 'Three']
    }
  },
  computed: {
    pretype: function() {
      return this.type === 'large' ? '--large' : '' 
    }
  }
}
</script>
