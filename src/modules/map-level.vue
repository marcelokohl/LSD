<template>
  <div class="map-level" :class="theClass">

    <div class="map-label" v-if="level > 0">
      <v-text>Level {{level}}</v-text>
    </div>

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
      <v-image class="boss" src="map/boss-labrinth.png"/>
      <v-image class="" src="map/mount-2.png"/>
    </div>

    <!-- SIA -->
    <div v-if="level > 4 && level < 9" class="map-sia">
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
      <v-image class="diplo" src="map/diplo.png"/>
      <v-image class="boss" src="map/boss-sia.png"/>
      <v-image src="map/cloud.png"/>
    </div>

    <!-- DIPLO -->
    <div v-if="level == 9" class="map-level-block">
      <v-image src="map/planet-1.png"/>
      <v-image class="trail" src="map/planet-trail-1.png"/>
    </div>
    <div v-else-if="level == 10" class="map-level-block">
      <v-image src="map/planet-2.png"/>
      <v-image class="trail" src="map/planet-trail-2.png"/>
    </div>
    <div v-else-if="level == 11" class="map-level-block">
      <v-image src="map/planet-1.png"/>
      <v-image class="trail" src="map/planet-trail-3.png"/>
    </div>
    <div v-else-if="level == 12">
      <v-image class="boss" src="map/boss-diplo.png"/>
      <div class="map-level-block">
        <v-image src="map/planet-1.png"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    locked: {
      type: Boolean
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
        if(this.locked) {
          c +=  ' locked'
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

    .map-label {
      position: absolute;
      bottom: 20%;
      z-index: 10;
      font-size: 3em;
      left: 0;
      right: 0;
      color: yellow;
      text-shadow:
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black,
      0 0 0.03em black;
    }

    &.locked {
      filter: brightness(.3);
    }

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
        height: 156%;
        right: 34%;
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
        bottom: 126%;
        left: 37%;
      }
      .boss {
        position: absolute;
        bottom: 50%;
        left: 10%;
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
        padding-top: 140%;
      }
      .boss {
        position: absolute;
        bottom: 62%;
        right: -24%;
      }
      .diplo {
        position: absolute;
        bottom: 222%;
        left: 6%;
      }
      .map-label {
        bottom: 7%;
      }
    }

    //DIPLO
    &.map-level-block-diplo {
      position: relative;
      text-align: center;

      .map-label {
        bottom: 33%;
      }
      .boss {
        display: block;
        max-width: 100%;
        margin: 0 auto -11%;
      }
      .map-level-block {
        padding: 2% 34%;

        .image {
          width: 100%;
          position: relative;
          z-index: 2;
        }
      }

      &.map-level-9 {
        left: -13%;

        .image.trail {
          position: absolute;
          width: 56%;
          bottom: 30%;
          left: 44%;
          z-index: 0;
        }
      }
      &.map-level-10 {
        right: -30%;
        margin-bottom: 13%;

        .image.trail {
          position: absolute;
          width: 49%;
          bottom: 19%;
          right: 57%;
          z-index: 0;
          transform: rotate(-13deg);
        }
      }
      &.map-level-11 {
        left: -30%;
        margin-top: 13%;

        .image.trail {
          position: absolute;
          width: 56%;
          bottom: 30%;
          left: 37%;
          z-index: 0;
          transform: rotate(-7deg);
        }
      }
      &.map-level-12 {
        .map-label {
          bottom: 17%;
        }
      }
    }
  }
</style>
