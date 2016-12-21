<template>
  <btn text="TEST" :large="large" :quiet="quiet" :cta="cta"></btn>
</template>

<script type="text/ecmascript-6">
  import BtnBar from 'components/btn-bar.vue'
  import Btn from 'components/btn.vue'
  import IconBtn from 'components/icon-btn.vue'
  import List from 'components/list.vue'
  import Radio from 'components/radio.vue'
  import Range from 'components/range.vue'
  import Search from 'components/search.vue'
  import SwitchBtn from 'components/switch-btn.vue'
  import Tabbar from 'components/tab-bar.vue'
  import TextInput from 'components/text-input.vue'
  import TextZone from 'components/textzone.vue'

  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      list: {
        type: Array,
        default () {
          return ['One', 'Two', 'Three']
        }
      }
    },
    data () {
      return {
        large: false,
        quiet: false,
        cta: false
      }
    },
    computed: {
      pretype: function () {
        return this.type === 'large' ? '--large' : ''
      }
    },
    components: {
      BtnBar,
      Btn,
      IconBtn,
      List,
      Radio,
      Range,
      Search,
      SwitchBtn,
      Tabbar,
      TextInput,
      TextZone
    }
  }
</script>
