import Vue from 'vue/dist/vue.js'

import btnbar from './components/btn-bar.vue'
import btn from './components/btn.vue'
import iconbtn from './components/icon-btn.vue'
import list from './components/list.vue'
import radio from './components/radio.vue'

Vue.component('btn-bar', btnbar)
Vue.component('btn', btn)
Vue.component('icon-btn', iconbtn)
Vue.component('list', list)
Vue.component('radio', radio)

new Vue({
  el: '#app',
  data() {
    return { 
      list: ['一战成名', '两翼齐飞', '三心二意'],
      large: true,
      quiet: false,
      cta: false,
      disable: 'disabled'
    }
  }
})