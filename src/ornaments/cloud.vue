<template lang="html">
  <div class="o-cloud">
    <div
      v-for="i in [1,2]"
      :key="i"
      :class="'cloud-inner-'+i"
      :style="
        'margin-left:'+x+'vw;'+
        'animation-duration: '+(duration)+'s;'+
        'background-image: url(\'images/clouds/'+cloud+'.png\');'
      "

    ></div>
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
  },
  mounted() {
    // if (jQuery(this).isOnScreen()) {
    //   alert();
    // }
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
    0% { transform: translateX(50%); }
    50% { transform: translateX(130%); }
    50.01% { transform: translateX(-30%); }
    100% { transform: translateX(50%); }
  }
  @-webkit-keyframes slide-cloud-2 {
    0% { transform: translateX(-30%); }
    100% { transform: translateX(130%); }
  }

</style>
