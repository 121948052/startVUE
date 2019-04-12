<template>
  <div>
    <div id='mChart' ref='mapChart' style="width: 880px; height: 600px;"></div>
  </div>
</template>

<script>
import mapOption from './mapOption.js'
import 'echarts/lib/chart/bar'  // 引入柱状图组件
import 'echarts/lib/chart/pie'  // 引入饼状图组件
import 'echarts/map/js/china.js'  // 引入中国地图组件
// 引入提示框和title组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/theme/macarons'//引入主题
import 'echarts/theme/shine'//引入主题

export default {
  components: {},
  data () {
    return {
      mapOption: mapOption
    }
  },
  methods: {
    getMap() {
      let myChart = this.$echarts.init(this.$refs.mapChart,'macarons')
      myChart.setOption(this.$data.mapOption)
    }
  },
  mounted () {
    this.getMap()
  },
}
</script>
