<template>
  <div>
    <Map></Map>
  </div>
</template>

<script>
import { Url } from '@CONST/urlConsts'
import Map from '@COMPO/charts/map.vue'
export default {
  components: {
    Map
  },
  created () {},
  data () {
    return {
      isShow: 1
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getData () {
      console.log('开始咯@@@')
    }
  },
}
</script>
