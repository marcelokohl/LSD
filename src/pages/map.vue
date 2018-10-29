<template lang="html">
  <v-page name="map" class="level-1">
    <div class="content">
      <v-image class="image-title" :src="'titles/arcade-'+$getLang()+'.png'"/>

      <v-game-avatar name="arcade" :to="{name:'arcade'}" :progress='0' locked/>
      <!-- $store.state.user.games.campaing.level -->
      <v-map-level v-for="l in [12,11,10,9,8,7,6,5,4,3,2,1,0]" :level="l" :locked="l > 1"/>
    </div>
  </v-page>
</template>

<script>
import MapLevel from '@/modules/map-level.vue'

export default {
  components: {
    'v-map-level': MapLevel
  },
}
</script>

<style lang="scss">
  .page-map {
    &.page > .container {
      padding: 0;
    }
    #avatar-arcade {
      width: 100%;
      margin-bottom: 10%;
    }
    .image-title {
      padding: 8rem 0 1rem;
    }
    .content {
      z-index: 2;
      position: relative;
    }
  }
</style>
