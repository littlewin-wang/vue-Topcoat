<template>
  <div class="topcoat-list">
    <h3 class="topcoat-list__header">{{ header }}</h3>
    <ul class="topcoat-list__container">
      <li class="topcoat-list__item" v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      header: {
        type: String,
        default: 'Category'
      },
      list: {
        type: Array,
        default: ['One', 'Two', 'Three']
      }
    }
  }
</script>
