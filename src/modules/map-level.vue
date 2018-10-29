<template>
  <div class="map-level">
    <div vv-if="level == 1" class="map-level-block">
      <v-image src="map/mount.png"/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss">
  .map-level {
    display: block;
  }
</style>
