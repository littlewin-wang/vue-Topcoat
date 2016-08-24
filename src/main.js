import Vue from 'vue/dist/vue.js'

import btnbar from './components/btn-bar.vue'
import btn from './components/btn.vue'
import iconbtn from './components/icon-btn.vue'

Vue.component('btn-bar', btnbar)
Vue.component('btn', btn)
Vue.component('icon-btn', iconbtn)

new Vue({
  el: '#app',
  data() {
    return { 
      list: ['A', 'B', 'C'],
      large: true,
      quiet: false,
      cta: false,
      disable: 'disabled'
    }
  }
})