<template>
  <input type="range" class="topcoat-range" :min="range.min" :max="range.max" :step="range.step" :value="range.value" :disabled="disabled">
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      range: {
        type: Object,
        default () {
          return {
            min: 0,
            max: 100,
            step: 1,
            value: 80
          }
        }
      }
    }
  }
</script>
