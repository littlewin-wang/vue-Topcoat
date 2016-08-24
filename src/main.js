import Vue from 'vue/dist/vue.js'
import btnbar from './components/btnbar.vue'

Vue.component('btn-bar', btnbar)

new Vue({
  el: '#app',
  data() {
    return { 
      list: ['A', 'B', 'C']
    }
  }
})