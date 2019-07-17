<template>
  <div class="my-chart"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
export default {
  props: {
    options: Object
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    // 添加resize监视
    this.init()
  },
  beforeDestroy () {
    this.chart.clear()
    this.chart.dispose()
  },
  watch: {
    options: {
      deep: true,
      handler (options) {
        if (!this.chart) {
          this.init()
        } else {
          if (options) {
            this.chart.setOption(options, true)
          } else {
            this.chart.clear()
          }
        }
      }
    }
  },
  methods: {
    _callMethod (method, ...args) {
      console.log(...args)
      if (!this.chart) return
      return this.chart[method](...args)
    },
    // 初始化chart
    init () {
      if (this.chart) return
      const chart = echarts.init(this.$el)
      this.chart = chart
      try {
        this.options &&
          chart.setOption(this.options, true)
      } catch (e) {
        console.log(e)
      }
    },
    // 销毁chart
    dispose () {
      this._callMethod('dispose')
      this.chart = null
    },
    resize () {
      this._callMethod('resize')
    },
    clear () {
      this._callMethod('clear')
    },
    mergeOptions (options) {
      this._callMethod('setOption', options)
    },
    dispatchAction (payload) {
      this._callMethod('dispatchAction', payload)
    },
    convertToPixel (finder, value) {
      return this._callMethod('convertToPixel', finder, value)
    },
    convertFromPixel (finder, value) {
      return this._callMethod('convertFromPixel', finder, value)
    },
    containPixel (finder, value) {
      return this._callMethod('containPixel', finder, value)
    },
    showLoading (type, options) {
      this._callMethod('showLoading', type, options)
    },
    hideLoading () {
      this._callMethod('hideLoading')
    },
    getDataURL (options) {
      return this._callMethod('getDataURL', options)
    },
    getConnectedDataURL (options) {
      return this._callMethod('getConnectedDataURL', options)
    }
  }
}
</script>

<style>
  .my-chart {
    width: 100%;
    height: 100%;
  }
</style>
