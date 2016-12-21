<template>
  <IconBtn :disabled="disabled" :large="large" :quiet="quiet"></IconBtn>
</template>

<script type="text/ecmascript-6">
  import BtnBar from 'components/btnbar.vue'
  import Btn from 'components/btn.vue'
  import CheckBox from 'components/checkbox.vue'
  import IconBtn from 'components/iconbtn.vue'
  import List from 'components/list.vue'
  import Radio from 'components/radio.vue'
  import Range from 'components/range.vue'
  import Search from 'components/search.vue'
  import SwitchBtn from 'components/switchbtn.vue'
  import Tabbar from 'components/tabbar.vue'
  import TextInput from 'components/textinput.vue'
  import TextZone from 'components/textzone.vue'

  export default {
    data () {
      return {
        disabled: true,
        large: false,
        quiet: false
      }
    },
    components: {
      BtnBar,
      Btn,
      CheckBox,
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
