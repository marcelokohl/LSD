<template lang="html">
  <v-page name="map" class="level-1">
    <!-- <v-image class="__REF__" src="__REF_MAP_SCREEN.png"/> -->
    <input type="number" v-model="current_level" style="position: fixed;top: 0px;left: 0px;font-size: 20px;width: 3em;">
    <v-image class="image-title" :src="'titles/arcade.png'"/>
    <div class="content">

      <v-game-avatar name="arcade" :to="{name:'arcade'}" :progress='100' :class="current_level == 13?'':'locked'"/>
      <!-- $store.state.user_old.games.campaing.level -->
      <v-map-level v-for="l in [12,11,10,9,8,7,6,5,4,3,2,1,0]" :key="l" :level="l" :locked="l > current_level" :current="current_level"/>
    </div>
    <div class="map-footer">
      <v-button class="primary" back>Back</v-button>
    </div>
  </v-page>
</template>

<script>
import jquery from 'jquery'
import MapLevel from '@/modules/map-level.vue'

export default {
  data() {
    return {
      current_level: 2
    }
  },
  mounted() {
    // alert();
    this.scrollToLevel()
  },
  components: {
    'v-map-level': MapLevel
  },
  methods: {
    scrollToLevel() {
      jquery('.page-content').animate({
        scrollTop: jquery('.map-item-'+this.current_level).offset().top - (jquery(window).height()/2)
      }, 2000);
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/breakpoints.scss";

  .__REF__ {
    position: absolute;
    opacity: 0;
    opacity: .5;
    left: 0;
    right: 0;
    // width: 47%;
    margin: 0px auto;
    z-index: 1000;
    pointer-events: none;
    display: none!important;
  }


  #app .page.page-map {
    align-items: flex-start;

    &.page > .container {
      padding: 0;
      max-width: 1020px;
      overflow: initial;
    }
    .map-footer {
      position: fixed;
      bottom: 0;
      left: 10%;
      right: 10%;
      z-index: 10;
      .button {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    #avatar-arcade {
      width: 100%;
      margin-bottom: 10%;
      transform: scale(.7);
      height: 18em;
      margin: 0;
      font-size: 16px;
    }
    .image-title {
      margin: 4rem auto 0;
      max-width: 400px;
      width: calc(100% - 40px);
      padding: 20px;
    }
    .content {
      z-index: 2;
      position: absolute;
      width: 700px;
      left: 50%;
      margin-left: -350px;

      @include breakpoint-smart() {
        transform: scale(.7);
      }
    }

  }
</style>
