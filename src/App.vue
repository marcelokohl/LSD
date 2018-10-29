<template>
  <div id="app" :class="'page-'+page_to">

    <v-bg :class="'bg-'+page_to" />

    <div class="page-content">
      <v-user-avatar />
      <transition
        name="page"
        :duration="1000"
        v-on:before-enter="beforeEnter"
      >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import Home from './pages/home.vue'
  import jquery from 'jquery'

  export default {
  name: 'app',
  components: {
    Home
  },
  data() {
    return {
      page_from: ""
    }
  },
  methods: {
    beforeEnter: function () {
    }
  },
  computed:{
    page_to: {
      get: function () {
        return this.$route.name
      },
      set: function () {}
    }
  },
  watch:{
    $route (to, from){
      this.page_to = to.name
      this.page_from = from.name
    }
  }
}
</script>

<style lang="scss">
  // @import "./assets/fonts/stylesheet.css";
  @import "@/scss/breakpoints.scss";

  html, body {
    font-size: 14px;

    @include breakpoint-smart() {
      font-size: 12px;
    }
    @include breakpoint-tablet() {
      font-size: 18px;
    }
  }
  .page-content {
    text-align: center;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 3;
    overflow: auto;
    overflow-x: hidden;
  }

  #app {
    overflow: hidden;
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;



    .page {
      transition: 1s;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      &.page-leave-active {
          transform: scale(.8);
          opacity: 0;
          overflow: hidden;
      }
      &.page-enter-active {
        // overflow: hidden;
        animation: show-page 1s;
      }
    }
  }

  @-webkit-keyframes show-page {
    0% {
        transform: scale(1.2);
        opacity: 0;
    }
    100% {
        transform:  scale(1);
        opacity: 1;
    }
  }
</style>
