<template>
  <Card class="card" :bordered="false" :dis-hover="false" :shadow="false">
    <!--太阳 -->
    <div class="sun">太阳</div>
    <!--水星-->
    <div class="mercury"></div>
    <!--水星轨道-->
    <div class="mercury-track track"></div>
    <!--金星-->
    <div class="venus"></div>
    <!--金星轨道-->
    <div class="venus-track track"></div>
    <!--地球-->
    <div class="earth"></div>
    <!--地球轨道-->
    <div class="earth-track track"></div>
    <!--火星-->
    <div class="mars"></div>
    <!--火星轨道-->
    <div class="mars-track track"></div>
    <!--木星-->
    <div class="jupiter"></div>
    <!--木星轨道-->
    <div class="jupiter-track track"></div>
    <!--土星-->
    <div class="saturn"></div>
    <!--土星轨道-->
    <div class="saturn-track track"></div>
    <!--天王星-->
    <div class="uranus"></div>
    <!--天王星轨道-->
    <div class="uranus-track track"></div>
    <!--海王星-->
    <div class="neptune"></div>
    <!--海王星轨道-->
    <div class="neptune-track track"></div>
    <!--外围-->
    <div class="peripheral track"></div>
  </Card>
</template>

<script>
  export default {
    name: "universe",
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  @track-color: #dfe3d8;
  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    background: #000c17;
    margin: auto;
    transform: scale(1);
  }

  .sun {
    width: 80px;
    height: 80px;
    left: 48%;
    top: 42%;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
    font-weight: bold;
    background: #ff8c50;
    position: absolute;
    border-radius: 50%;
    box-shadow: 8px 8px 10px #fffa42,-8px -8px 10px #fffa42, -8px 8px 10px #fffa42,8px -8px 10px #fffa42;
  }

  .track {
    border-radius: 50%;
    border: @track-color dashed 1px;
  }

  .mercury {
    width: 10px;
    height: 10px;
    left: 46%;
    top: 46%;
    position: absolute;
    background-color: rgb(166, 138, 56);
    border-radius: 50%;
    transform-origin: 72px 14px;
    animation: rotate 2s infinite linear;
  }

  .mercury-track {
    width: 135px;
    height: 135px;
    position: absolute;
    left: 46.3%;
    top: 38.9%;
  }

  .venus {
    width: 20px;
    height: 20px;
    left: 44%;
    top: 45.5%;
    position: absolute;
    background-color: rgb(246, 157, 97);
    border-radius: 50%;
    transform-origin: 105px 17px;
    animation: rotate 3.84s infinite linear;
  }

  .venus-track {
    width: 190px;
    height: 190px;
    left: 44.6%;
    top: 35.3%;
    position: absolute;
  }

  .earth {
    width: 18px;
    height: 18px;
    position: absolute;
    left: 41.7%;
    top: 45.5%;
    background-color: #348EED;
    border-radius: 50%;
    transform-origin: 143px 14px;
    animation: rotate 6.25s infinite linear;
  }

  .earth-track {
    width: 270px;
    height: 270px;
    position: absolute;
    top: 30.2%;
    left: 42.2%;
  }

  .mars {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 45.5%;
    left: 39.3%;
    border-radius: 50%;
    background-color: rgb(140, 119, 63);
    transform-origin: 181px 14px;
    animation: rotate 11s infinite linear;
  }

  .mars-track {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 25%;
    left: 39.8%;
  }

  .jupiter {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 34.6%;
    top: 45%;
    background-color: rgb(156, 164, 143);
    border-radius: 50%;
    transform-origin: 258px 20px;
    animation: rotate 60s infinite linear;
  }

  .jupiter-track {
    width: 480px;
    height: 480px;
    position: absolute;
    top: 17%;
    left: 35.8%;
  }

  .saturn {
    width: 26px;
    height: 26px;
    position: absolute;
    left: 32.7%;
    top: 45%;
    background-color: rgb(215, 171, 68);
    border-radius: 50%;
    transform-origin: 292px 20px;
    animation: rotate 180s infinite linear;
  }

  .saturn-track {
    width: 560px;
    height: 560px;
    position: absolute;
    top: 12%;
    left: 33.5%;
  }

  .uranus {
    width: 28px;
    height: 28px;
    position: absolute;
    left: 30.5%;
    top: 45%;
    background-color: rgb(164, 192, 206);
    border-radius: 50%;
    transform-origin: 330px 20px;
    animation: rotate 500s infinite linear;
  }

  .uranus-track {
    width: 630px;
    height: 630px;
    position: absolute;
    top: 7.8%;
    left: 31.4%;
  }

  .neptune {
    width: 28px;
    height: 28px;
    position: absolute;
    left: 27.7%;
    top: 45%;
    background-color: rgb(164, 192, 206);
    border-radius: 50%;
    transform-origin: 376px 20px;
    animation: rotate 1000s infinite linear;
  }

  .neptune-track {
    width: 720px;
    height: 720px;
    position: absolute;
    top: 2.5%;
    left: 28.6%;
  }

  .peripheral {
    width: 750px;
    height: 750px;
    position: absolute;
    top: 0.8%;
    left: 27.7%;
    box-shadow: 5px 5px 5px gold,-5px -5px 5px gold,-5px 5px 5px gold,5px -5px 5px gold;
  }
</style>