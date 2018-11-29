<template lang="html">
  <v-page name="map" class="level-1">
    <!-- <v-image class="__REF__" src="__REF_MAP_SCREEN.png"/> -->
    <input type="number" v-model="current_level" style="position: fixed;top: 0px;left: 0px;font-size: 20px;width: 3em;">
    <div class="content">
      <v-image class="image-title" :src="'titles/arcade-'+$getLang()+'.png'"/>

      <v-game-avatar name="arcade" :to="{name:'arcade'}" :progress='100' :class="current_level == 13?'':'locked'"/>
      <!-- $store.state.user_old.games.campaing.level -->
      <v-map-level v-for="l in [12,11,10,9,8,7,6,5,4,3,2,1,0]" :key="l" :level="l" :locked="l > current_level" :current="current_level"/>
      <div class="map-footer">
        <v-button class="primary" back>Back</v-button>
      </div>
    </div>
  </v-page>
</template>

<script>
import MapLevel from '@/modules/map-level.vue'

export default {
  data() {
    return {
      current_level: 8
    }
  },
  components: {
    'v-map-level': MapLevel
  },
}
</script>

<style lang="scss">
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
    }
    .image-title {
      padding: 12% 0 4%;
      margin: 0 auto;
      max-width: 490px;
    }
    .content {
      z-index: 2;
      position: relative;
    }

  }
</style>
