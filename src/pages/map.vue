<template lang="html">
  <v-page name="map" class="level-1">
    <div class="content">
      <v-image src="map/arcade-mode.png"/>
      <v-image src="map/cloud-arcade.png"/>

      <v-map-level :level="12"/>
      <v-map-level :level="11"/>
      <v-map-level :level="10"/>
      <v-map-level :level="9"/>
      <v-map-level :level="8"/>
      <v-map-level :level="7"/>
      <v-map-level :level="6"/>
      <v-map-level :level="5"/>
      <v-map-level :level="4"/>
      <v-map-level :level="3"/>
      <v-map-level :level="2"/>
      <v-map-level :level="1"/>
      <v-map-level :level="0"/>
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
    .content {
      z-index: 2;
      position: relative;
    }
  }
</style>
