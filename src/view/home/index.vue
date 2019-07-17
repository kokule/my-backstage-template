<template>
  <my-chart style="width: 1500px;height:780px;margin: 0 auto" :options="option"></my-chart>
</template>

<script>
import myChart from '@/components/charts/my-chart'
import earth from '@/assets/images/home/earth.jpg'
import bathymetry from '@/assets/images/home/bathymetry_4k.jpg'
import night from '@/assets/images/home/night.jpg'
import starfield from '@/assets/images/home/starfield.jpg'
import clouds from '@/assets/images/home/clouds.png'

export default {
  name: 'index',
  components: {
    myChart
  },
  data () {
    return {
      option: {
        backgroundColor: '#000',
        globe: {
          baseTexture: earth,
          heightTexture: bathymetry,
          displacementScale: 0.1,
          shading: 'lambert',
          environment: starfield,
          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },

          layers: [
            {
              type: 'blend',
              blendTo: 'emission',
              texture: night
            },
            {
              type: 'overlay',
              texture: clouds,
              shading: 'lambert',
              distance: 5
            }
          ]
        },
        series: []
      }
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style scoped>

</style>
