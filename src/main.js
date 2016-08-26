import Vue from 'vue/dist/vue.js'

import btnbar from './components/btn-bar.vue'
import btn from './components/btn.vue'
import iconbtn from './components/icon-btn.vue'
import list from './components/list.vue'
import radio from './components/radio.vue'
import range from './components/range.vue'
import search from './components/search.vue'
import switchbtn from './components/switch-btn.vue'
import tabbar from './components/tab-bar.vue'
import textinput from './components/text-input.vue'
import textarea from './components/text-area.vue'

Vue.component('btn-bar', btnbar)
Vue.component('btn', btn)
Vue.component('icon-btn', iconbtn)
Vue.component('list', list)
Vue.component('radio', radio)
Vue.component('range', range)
Vue.component('search', search)
Vue.component('switchbtn', switchbtn)
Vue.component('tab-bar', tabbar)
Vue.component('text-input', textinput)
Vue.component('text-area', textarea)

new Vue({
  el: '#app',
  data() {
    return { 
      list: ['一战成名', '两翼齐飞', '三心二意', '四海为家'],
      large: true,
      quiet: false,
      cta: false,
      size: { rows: 4, cols: 20 }
    }
  }
})