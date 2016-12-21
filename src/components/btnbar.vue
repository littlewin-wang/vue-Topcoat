<template>
  <div class="topcoat-button-bar">
    <div class="topcoat-button-bar__item" v-for="item in list">
      <button :class="['topcoat-button-bar__button' + isLarge]">{{ item }}</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      large: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default () {
          return ['One', 'Two', 'Three']
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
