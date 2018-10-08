<template>
  <div id="app" :class="'page-'+page.name">
    <router-view></router-view>
    <div class="bg">
      <div class="bg-wave">
        <div class="bg-wave-top"><div class="bg-wave-inner"></div></div>
        <div class="bg-wave-bottom"><div class="bg-wave-inner"></div></div>
      </div>
      <div class="bg-sky">
        <o-cloud x="0" duration="300" cloud="2"/>
        <o-cloud x="-40" duration="220"/>
        <o-cloud x="20" duration="210"/>
        <o-cloud x="-70" duration="310"/>
        <o-cloud x="-30" duration="250" cloud="2"/>
        <o-cloud x="-80" duration="290"/>
        <o-cloud x="-90" duration="250"/>
        <o-cloud x="50" duration="280" cloud="2"/>
        <o-cloud x="70" duration="260"/>
        <o-cloud x="80" duration="220"/>
        <o-cloud x="-20" duration="210"/>
        <o-cloud x="10" duration="290"/>
        <o-cloud x="60" duration="290"/>
        <o-cloud x="0" duration="300"/>
        <o-cloud x="-10" duration="200"/>
        <o-cloud x="-50" duration="200"/>
        <o-cloud x="-60" duration="200"/>
        <o-cloud x="30" duration="200"/>
        <o-cloud x="90" duration="200"/>
        <o-cloud x="40" duration="200"/>
      </div>
    </div>

  </div>
</template>

<script>
import Home from './pages/home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  // data() {
  //   return {
  //     page: {}
  //   }
  // },
  computed:{
    page: {
      get: function () {
        return this.$route
      },
      set: function (value) {}
    }
  },
  // beforeRouteUpdate (to, from, next) {
  //   // console.log('>>beforeRouteUpdate: '+to)
  //   // console.log(this.page.name);
  // },
  watch:{
    $route (to, from){
      this.page = to;
      // console.log(this.page.name);
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/fonts/stylesheet.css";
  @import "@/scss/breakpoints.scss";

  #app {
    overflow: hidden;
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;
    font-size: 16px;

    @include breakpoint-tablet() {
      font-size: 12px;
    }

    &.page-home {
      .bg {
        .bg-wave {
          .bg-wave-bottom, .bg-wave-top {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .bg-sky {
          transform: scale(0.9);
        }
      }
    }
    .page {
      position: absolute;
      top: 0; right: 0;bottom: 0;left: 0;
      z-index: 2;
    }
    .bg {
      position: absolute;
      top: 0; right: 0;bottom: 0;left: 0;
      z-index: 1;
      background-color: #97d9f1;

      .bg-sky {
        transition: 1s;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        transform: scale(1);
      }
      .bg-wave {
        position: absolute;
        top: 0; right: 0;bottom: 0;left: 0;
        .bg-wave-bottom, .bg-wave-top {
          z-index: 3;
          position: absolute;
          transition: 1s;
          opacity: 0;
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
