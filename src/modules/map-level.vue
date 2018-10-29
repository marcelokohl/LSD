<template>
  <div class="map-level" :class="theClass">

    <div v-if="level < 4" class="map-stairs">
      <v-image src="map/stairs.png"/>
    </div>
    <template v-else-if="level < 5"></template>
    <div v-else-if="level < 8" class="map-rainbow">
      <v-image src="map/rainbow.png"/>
    </div>

    <!-- LABRINTH -->
    <div v-if="level < 4" class="map-labrinth">
      <v-image src="map/labrinth.png"/>
    </div>

    <div v-if="level == 0" class="map-level-block">
      <v-image src="map/level-base.png"/>
    </div>
    <div v-if="level == 1" class="map-level-block">
      <v-image src="map/mount-1.png"/>
    </div>
    <div v-else-if="level == 2" class="map-level-block">
      <v-image src="map/mount.png"/>
    </div>
    <div v-else-if="level == 3" class="map-level-block">
      <v-image src="map/mount.png"/>
    </div>
    <div v-else-if="level == 4" class="map-level-block">
      <v-image class="map-1-sia" src="map/sia.png"/>
      <v-image class="map-1-tiger" src="map/tiger.png"/>
      <v-image class="" src="map/mount-2.png"/>
    </div>

    <!-- SIA -->
    <div v-if="level > 4 && level < 10" class="map-sia">
      <v-image src="map/sia.png"/>
    </div>

    <div v-if="level == 5" class="map-level-block">
      <v-image src="map/cloud.png"/>
    </div>
    <div v-else-if="level == 6" class="map-level-block">
      <v-image src="map/cloud.png"/>
    </div>
    <div v-else-if="level == 7" class="map-level-block">
      <v-image src="map/cloud.png"/>
    </div>
    <div v-else-if="level == 8" class="map-level-block">
      <v-image class="boss" src="map/diplo.png"/>
      <v-image class="boss" src="map/boss-sia.png"/>
      <v-image src="map/cloud.png"/>
    </div>

    <!-- DIPLO -->
    <div v-if="level == 9" class="map-level-block">
      <v-image src="map/planet-1.png"/>
    </div>
    <div v-else-if="level == 10" class="map-level-block">
      <v-image src="map/planet-2.png"/>
    </div>
    <div v-else-if="level == 11" class="map-level-block">
      <v-image src="map/planet-1.png"/>
    </div>
    <div v-else-if="level == 12" class="map-level-block">
      <v-image src="map/ovin.png"/>
      <v-image src="map/planet-1.png"/>
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
  },
  computed:{
    theClass: {
      get: function () {
        var c = 'map-level-' + this.level + ' map-level-block-'
        if (this.level < 5) {
          c +=  'labrinth'
        }
        else if (this.level < 9) {
          c +=  'sia'
        }
        else {
          c +=  'diplo'
        }
        return c
      },
      set: function () {}
    }
  },
}
</script>

<style lang="scss">
  .level-1 {
    .map-level-0 {
      .map-labrinth {
        display: block;
      }
    }
  }
  .map-level {
    display: block;
    position: relative;
    z-index: 1;

    .map-level-block {
      position: relative;
      z-index: 2;
    }
    .map-stairs {
      position: absolute;
      z-index: 1;
      bottom: -76%;
      overflow: hidden;
      height: 176%;
    }
    .map-labrinth {
      position: absolute;
      bottom: 36%;
      z-index: 3;
      left: 30%;
      display: none;
    }

    //
    &.map-level-0 {
      left: -40%;
      padding-top: 40%;
      position: relative;
      z-index: 2;
      .map-stairs {
        position: absolute;
        z-index: 1;
        bottom: 0;
        overflow: hidden;
        height: 180%;
        right: 23%;
      }
      .map-labrinth {
        bottom: 0;
      }
    }
    &.map-level-1 {
      padding-top: 30%;
      .map-stairs {
        right: 10%;
        bottom: 30%;
        height: 120%;
      }
    }
    &.map-level-2 {
      padding-top: 25%;
      .map-stairs {
        left: 10%;
        bottom: 30%;
        height: 120%;
      }
    }
    &.map-level-3 {
      padding-top: 24%;
      .map-stairs {
        right: 10%;
        bottom: 30%;
        height: 120%;
      }
    }
    &.map-level-4 {
      padding-top: 80%;
      .map-1-sia {
        position: absolute;
        bottom: 117%;
        left: 37%;
      }
      .map-1-tiger {
        position: absolute;
      }
    }

    // SIA
    .map-rainbow {
      position: absolute;
      z-index: 1;
      bottom: -80%;
      overflow: hidden;
      height: 180%;
      left: 9%;
    }
    .map-sia {
      position: absolute;
      z-index: 1;
      bottom: 30%;
      display: none;
    }
    &.map-level-block-sia {
      padding-top: 80%;
      &.map-level-8 {
        padding-top: 0;
      }
    }
  }
</style>
