<template lang="html">
  <v-page name="map">
    <div class="content">
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="3"/>
      <v-map-level :level="2"/>
      <v-map-level :level="1"/>
    </div>
    <!-- <div class="map-bg">
      <div class="map-particles" id="map-particles-cloud-1"></div>
      <div class="map-particles" id="map-particles-cloud-2"></div>
    </div> -->
  </v-page>
</template>

<script>
import MapLevel from '@/modules/map-level.vue'

export default {
  components: {
    'v-map-level': MapLevel
  },
  mounted() {
    // this.initMapSky();
  },
  // methods: {
  //   initMapSky: function (event) {
  //     window.particlesJS('map-particles-cloud-1', {
  //       "particles": {
  //         "number": {
  //           "value": 20,
  //           "density": {
  //             "enable": true,
  //             "value_area": 1800
  //           }
  //         },
  //         "line_linked": {
  //           "enable": false
  //         },
  //         "move": {
  //           "enable": true,
  //           "speed": 1,
  //           "direction": "right",
  //           "random": true,
  //           "straight": true,
  //           "out_mode": "out",
  //           "bounce": false,
  //           "attract": {
  //             "enable": false,
  //           }
  //         },
  //         "shape": {
  //           "type": "image",
  //           "image": {
  //             "src": "images/clouds/1.png",
  //             "srcs": ["images/clouds/1.png","images/clouds/2.png","images/clouds/3.png"],
  //             "width": 110,
  //             "height": 47
  //           },
  //         },
  //         "size": {
  //           "value": 47,
  //           "random": false,
  //           "anim": {
  //             "enable": false,
  //           }
  //         },
  //       }
  //     })
  //     window.particlesJS('map-particles-cloud-2', {
  //       "particles": {
  //         "number": {
  //           "value": 20,
  //           "density": {
  //             "enable": true,
  //             "value_area": 1800
  //           }
  //         },
  //         "line_linked": {
  //           "enable": false
  //         },
  //         "move": {
  //           "enable": true,
  //           "speed": 1,
  //           "direction": "right",
  //           "random": true,
  //           "straight": true,
  //           "out_mode": "out",
  //           "bounce": false,
  //           "attract": {
  //             "enable": false,
  //           }
  //         },
  //         "shape": {
  //           "type": "image",
  //           "image": {
  //             "src": "images/clouds/3.png",
  //             "srcs": ["images/clouds/1.png","images/clouds/2.png","images/clouds/3.png"],
  //             "width": 110,
  //             "height": 47
  //           },
  //         },
  //         "size": {
  //           "value": 47,
  //           "random": false,
  //           "anim": {
  //             "enable": false,
  //           }
  //         },
  //       }
  //     })
  //   },
  // }
}
</script>

<style lang="scss">
  .page-map {
    .content {
      z-index: 2;
      position: relative;
    }
    // .map-bg {
    //   z-index: 1;
    //   position: absolute;
    //   top: 0; right: 0;bottom: 0;left: 0;
    //   /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#420051+0,c0389a+50,7db9e8+100 */
    //   background: #420051; /* Old browsers */
    //   background: -moz-linear-gradient(top, #420051 0%, #c0389a 50%, #7db9e8 100%); /* FF3.6-15 */
    //   background: -webkit-linear-gradient(top, #420051 0%,#c0389a 50%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    //   background: linear-gradient(to bottom, #420051 0%,#c0389a 50%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    //   filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#420051', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
    // }
    // .map-particles {
    //   transition: 1s;
    //   transform: scale(1);
    //   position: absolute;
    //   top: 0; right: 0;bottom: 0;left: 0;
    //
    //   // &#map-particles-cloud-3 {
    //   //   bottom: 66%;
    //   // }
    //   // &#map-particles-cloud-2 {
    //   //   top: 33%;
    //   //   bottom: 33%;
    //   // }
    //   // &#map-particles-cloud-1 {
    //   //   top: 66%;
    //   // }
    //   // top: 0; right: 0;bottom: 0;left: 0;
    // }
  }
</style>
