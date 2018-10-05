<template lang="html">
  <div class="o-cloud">
    <div
      v-for="i in [1,2]"
      :key="i"
      :class="'cloud-inner-'+i"
      :style="
        'transform: translateX('+x+'vw);'+
        'animation-duration: '+(duration)+'s;'+
        'background-image: url(\'images/clouds/'+cloud+'.png\');'
      "

    ></div>
    <!-- <div class="cloud-inner-2" :style="'transform: translateX('+x+'vw); animation-duration: '+(duration)+'s;'"></div> -->
    <v-image :src="'clouds/'+cloud+'.png'"/>
  </div>
</template>

<script>
export default {
  props: {
    x: {
      default:"0",
      type:String
    },
    duration: {
      default:"60",
      type:String
    },
    cloud: {
      default:"1",
      type:String
    }
  }
}
</script>

<style lang="scss">
  .o-cloud {
    position: relative;
    .image {
      opacity: 0;
    }
    .cloud-inner-1 {
      position: absolute;
      top: 0; right: -100%; bottom: 0; left: -100%;
      animation: slide-cloud 10s linear infinite;
      background-repeat: no-repeat;
    }
    .cloud-inner-2 {
      position: absolute;
      top: 0; right: -100%; bottom: 0; left: -100%;
      animation: slide-cloud-2 10s linear infinite;
      background-repeat: no-repeat;
    }
  }
  @-webkit-keyframes slide-cloud {
    0% { background-position: 50% 0; }
    50% { background-position: 130% 0; }
    50.01% { background-position: -30% 0; }
    100% { background-position: 50% 0; }
  }
  @-webkit-keyframes slide-cloud-2 {
    0% { background-position: -30% 0; }
    100% { background-position: 130% 0; }
  }
</style>
