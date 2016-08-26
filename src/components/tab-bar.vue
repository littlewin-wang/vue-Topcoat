<template>
  <div class="topcoat-tab-bar">
    <label class="topcoat-tab-bar__item" v-for="item in list">
      <input type="radio" name="tab-bar">
      <button class="topcoat-tab-bar__button">
        {{ item }}
      </button>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: ['One', 'Two', 'Three']
    }
  }
}
</script>
