<template>
  <div id="app" :class="'page-'+page.name">
    <div class="bg">
      <div class="bg-noise"></div>
      <div class="bg-inner" v-if="page.name != 'map'">
        <div class="bg-wave">
          <div class="bg-wave-top"><div class="bg-wave-inner"></div></div>
          <div class="bg-wave-bottom"><div class="bg-wave-inner"></div></div>
        </div>
        <div class="bg-particles" id="particles-cloud-1"></div>
        <div class="bg-particles" id="particles-cloud-2"></div>
      </div>
      <div class="bg-map"></div>
    </div>
    <!-- <transition name="page" :duration="1000"> -->
      <router-view></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
  import Home from './pages/home.vue'
  import 'particles.js'
  // import '../public/particles/c2runtime.js'

  export default {
  name: 'app',
  components: {
    Home
  },
  mounted() {
    this.initBg();
  },
  updated() {
    // this.initBg();
  },
  methods: {
    initSky: function (event) {
      window.particlesJS('particles-cloud-1', {
        "particles": {
          "number": {
            "value": 4,
            "density": {
              "enable": true,
              "value_area": 1800
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
            }
          },
          "shape": {
            "type": "image",
            "image": {
              "src": "images/clouds/1.png",
              "width": 110,
              "height": 47
            },
          },
          "size": {
            "value": 47,
            "random": false,
            "anim": {
              "enable": false,
            }
          },
        }
      })
      window.particlesJS('particles-cloud-2', {
        "particles": {
          "number": {
            "value": 3,
            "density": {"enable": false}
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
            }
          },
          "shape": {
            "type": "image",
            "image": {
              "src": "images/clouds/2.png",
              "width": 320,
              "height": 139
            },
          },
          "size": {
            "value": 139,
            "random": false,
            "anim": {
              "enable": false,
            }
          },
        }
      })
    },
    initSkyArcade: function (event) {
      window.particlesJS('particles-cloud-1', {
        "particles": {
          "number": {
            "value": 4,
            "density": {
              "enable": true,
              "value_area": 1800
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
            }
          },
          "shape": {
            "type": "image",
            "image": {
              "src": "images/clouds/3.png",
              "width": 110,
              "height": 47
            },
          },
          "size": {
            "value": 47,
            "random": false,
            "anim": {
              "enable": false,
            }
          },
        }
      })
      window.particlesJS('particles-cloud-2', {
        "particles": {
          "number": {
            "value": 3,
            "density": {"enable": false}
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
            }
          },
          "shape": {
            "type": "image",
            "image": {
              "src": "images/clouds/4.png",
              "width": 320,
              "height": 139
            },
          },
          "size": {
            "value": 139,
            "random": false,
            "anim": {
              "enable": false,
            }
          },
        }
      })
    },
    initBg: function (event) {
      console.log(this.page.name);
      if (this.page.name == 'map') {
        console.log('to map');
      } else if (this.page.name == 'arcade') {
        this.initSkyArcade();
      } else if (this.page.name == 'profile') {
        // this.initSkyArcade();
      } else {
        this.initSky();
      }
    }
  },
  computed:{
    page: {
      get: function () {
        return this.$route
      },
      set: function () {}
    }
  },
  watch:{
    $route (to){
      this.page = to;
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/fonts/stylesheet.css";
  @import "@/scss/breakpoints.scss";

  html, body {
    font-size: 16px;

    @include breakpoint-smart() {
      font-size: 12px;
    }
    @include breakpoint-tablet() {
      font-size: 18px;
    }
  }

  #app {
    overflow: hidden;
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;

    &.page-home {
      .bg {
        .bg-wave {
          .bg-wave-bottom, .bg-wave-top {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .bg-particles {
          transform: scale(0.8);
        }
        .bg-wave {
          transform: scale(1);
        }
      }
    }
    &.page-arcade {
      .bg {
        background-color: #390043;
      }
    }
    &.page-user-profile {
      .bg {
        // opacity: 0;
      }
    }
    .bg-inner {
      position: absolute;
      top: 0; right: 0;bottom: 0;left: 0;
    }

    // .page {
    //   .content {
    //     z-index: 2;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    //   }
    // }
    .bg {
      position: absolute;
      top: 0; right: 0;bottom: 0;left: 0;
      z-index: 1;
      background-color: #6CDAF2;
      transition: .6s;
      .bg-particles {
        transition: 1s;
        transform: scale(1);
        position: absolute;
        top: -14%; right: -14%;bottom: -14%;left: -14%;
        // top: 0; right: 0;bottom: 0;left: 0;
      }
      .bg-noise {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: 4;
        background-image: url('../public/images/noise.png');
        opacity: .15;

      }
      .bg-wave {
        position: absolute;
        top: 0; right: 0;bottom: 0;left: 0;
        transform: scale(1.2);
        transition: 1s;
        z-index: 3;

        .bg-wave-bottom, .bg-wave-top {
          position: absolute;
          transition: 1s;
        }
        .bg-wave-top {
          background-color: #500d56;
          top: 0; right: 0; bottom: calc(50% + 275px); left: 0;
          transform: translateY(calc(-100% - 240px));
          .bg-wave-inner {
            background-image: url('../public/images/bg-wave-top.svg');
            animation: slide-wave-top 40s linear infinite;
            width: 100%;
            height: 240px;
            position: absolute;
            bottom: -240px;
          }
        }
        .bg-wave-bottom {
          background-color: #c660a4;
          top: calc(50% + 275px); right: 0; bottom: 0; left: 0;
          transform: translateY(calc(100% + 240px));
          .bg-wave-inner {
            background-image: url('../public/images/bg-wave-bottom.svg');
            animation: slide-wave-top 50s linear infinite;
            width: 100%;
            height: 150px;
            position: absolute;
            top: -150px;
          }
        }
      }
    }
  }

  @-webkit-keyframes slide-wave-top {
    from { background-position: 0 0; }
    to { background-position: -1420px 0; }
  }
  @-webkit-keyframes slide-wave-bottom {
    from { background-position: -1420px 0; }
    to { background-position: 0 0; }
  }
</style>
