<template>
  <div class="map-item" :class="theClass">

    <div v-if="level != 0" class="map-label">{{theLevelLabel}}</div>

    <!-- LEVEL 12 -->
    <template v-if="level == 12">
      <div class="map-block">
        <v-image src="map/orange-planet.png"/>
      </div>
      <div class="map-addons">
        <v-image class="boss" src="map/boss-diplo.png"/>
      </div>
      <!-- <v-image class="map-key" src="map/key.png"/> -->
    </template>

    <!-- LEVEL 11 -->
    <template v-else-if="level == 11">
      <div class="map-block">
        <v-image src="map/green-planet.png"/>
      </div>
      <div class="map-addons">
        <v-image src="map/planet-trail-3.png"/>
      </div>
    </template>

    <!-- LEVEL 10 -->
    <template v-else-if="level == 10">
      <div class="map-block">
        <v-image src="map/orange-planet.png"/>
      </div>
      <div class="map-addons">
        <v-image src="map/planet-trail-2.png"/>
      </div>
    </template>

    <!-- LEVEL 9 -->
    <template v-else-if="level == 9">
      <div class="map-block">
        <v-image src="map/green-planet.png"/>
      </div>
      <div class="map-addons">
        <v-image src="map/planet-trail-1.png"/>
      </div>
    </template>

    <!-- LEVEL 8 -->
    <template v-else-if="level == 8">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="diplo" src="map/diplo.png"/>
        <v-image class="boss" src="map/boss-sia.png"/>
      </div>
      <!-- <v-image class="map-key" src="map/key.png"/> -->
    </template>

    <!-- LEVEL 7 -->
    <template v-else-if="level == 7">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="rainbow" src="map/raibow-way.png"/>
      </div>
    </template>

    <!-- LEVEL 6 -->
    <template v-else-if="level == 6">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="rainbow" src="map/raibow-way.png"/>
      </div>
    </template>

    <!-- LEVEL 5 -->
    <template v-else-if="level == 5">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="rainbow" src="map/raibow-way.png"/>
      </div>
    </template>

    <!-- LEVEL 4 -->
    <template v-else-if="level == 4">
      <div class="map-block">
        <v-image src="map/platform-white-flowers.png"/>
      </div>
      <div class="map-addons">
        <v-image class="sia" src="map/sia.png"/>
        <v-image class="locker" src="map/locker.png"/>
        <v-image class="boss" src="map/boss-labrinth.png"/>
      </div>
      <v-image class="map-key" src="map/key.png"/>
    </template>

    <!-- LEVEL 3 -->
    <template v-else-if="level == 3">
      <div class="map-block">
        <v-image src="map/montanha.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <!-- <v-image class="player" src="map/labrinth.png"/> -->
      </div>
    </template>

    <!-- LEVEL 2 -->
    <template v-else-if="level == 2">
      <div class="map-block">
        <v-image src="map/montanha.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <!-- <v-image class="player" src="map/labrinth.png"/> -->
      </div>
    </template>

    <!-- LEVEL 1 -->
    <template v-else-if="level == 1">
      <div class="map-block">
        <v-image src="map/platform-pink-flowers.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <!-- <v-image class="player" src="map/labrinth.png"/> -->
      </div>
    </template>

    <!-- LEVEL 0 -->
    <template v-else-if="level == 0">
      <div class="map-block">
        <v-image src="map/floor-pink-flowers.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <v-image class="player" src="map/labrinth.png"/>
      </div>
    </template>

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
        var c = 'map-item-' + this.level
        if(this.locked) {
          c +=  ' locked'
        }
        return c
      },
      set: function () {}
    },
    theLevelLabel: {
      get: function () {
        return 'Level ' + this.level
      },
      set: function () {}
    }
  },
}
</script>

<style lang="scss">
  @import "@/scss/fonts.scss";

  .map-item {
    display: block;
    position: absolute;
    width: 100%;

    // &.locked {
    //   &>*:not(.map-key) {
    //     filter: brightness(.3);
    //   }
    // }

    .map-label {
      display: none;
      font-family: font(text);
      position: absolute;
      bottom: 20%;
      z-index: 10;
      font-size: 3em;
      left: 0;
      right: 0;
      color: yellow;
      transition: 0;
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
    .map-addons {
      position: absolute;
      top:0; right:0; bottom: 0; left:0;

      & > * {
        position: absolute;
      }
    }
    .map-block {
      position: relative;

    }
    .map-key {
      position: absolute;
    }
  }

  .map-item-12 {
    top: 140%;
    .map-block {
      width: 100%;
      margin: 0 43% 0;
      z-index: 2;
    }
    .map-key {
      bottom: 65%;
      left: 42%;
    }
    .boss {
      left: 31%;
      bottom: 82%;
    }
    .map-label {
      bottom: 28%;
    }
  }
  .map-item-11 {
    top: 186%;
    .map-block {
      padding-left: 31%;
    }
    .map-label {
      padding-right: 27%;
      bottom: 23%;
    }
    .map-addons {
      display: none;
    }
  }
  .map-item-10 {
    top: 220%;
    .map-block {
      padding-left: 58%;
    }
    .map-label {
      padding-left: 31%;
      bottom: 29%;
    }
    .map-addons {
      display: none;
    }
  }
  .map-item-9 {
    top: 256%;
    .map-block {
      padding-left: 33%;
    }
    .map-label {
      padding-right: 21%;
      bottom: 25%;
    }
    .map-addons {
      display: none;
    }
  }
  .map-item-8 {
    top: 375%;
    z-index: 4;
    .map-block {
      padding-left: 58%;
    }
    .map-label {
      padding-left: 39%;
      bottom: 5%;
    }
    .map-key {
      bottom: 65%;
      left: 42%;
    }
    .boss {
      right: 5%;
      bottom: 88%;
    }
    .diplo {
      bottom: 302%;
      left: 39%;
    }
  }
  .map-item-7 {
    top: 403%;
    z-index: 3;
    .map-block {
      padding-left: 18%;
      z-index: 1;
    }
    .map-label {
      padding-right: 41%;
      bottom: 5%;
    }
    .rainbow {
      bottom: 48%;
      left: 32%;
      z-index: -1;
    }
  }
  .map-item-6 {
    top: 431%;
    z-index: 2;
    .map-block {
      padding-left: 58%;
      z-index: 1;
    }
    .map-label {
      padding-left: 39%;
      bottom: 5%;
    }
    .rainbow {
      bottom: 48%;
      left: 32%;
      z-index: -1;
      transform: scaleX(-1);
    }
  }
  .map-item-5 {
    top: 454%;
    .map-block {
      padding-left: 17%;
      z-index: 1;
    }
    .map-label {
      padding-right: 41%;
      bottom: 5%;
    }
    .rainbow {
      bottom: 48%;
      left: 32%;
      z-index: -1;
    }
  }
  .map-item-4 {
    top: 525%;
    .map-block {
      .image {
        margin: auto;
      }
    }
    .map-label {
    }
    .sia {
      bottom: 111%;
      left: 41%;
    }
    .locker {
      bottom: 126%;
      left: 45%;
    }
    .boss {
      bottom: 49%;
      left: 29%;
    }
    .map-key {
      bottom: 65%;
      left: 42%;
    }
  }
  .map-item-3 {
    top: 605%;
    .map-block {
      z-index: 1;
      .image {
        margin: auto;
      }
    }
    .map-label {
    }
    .player {
      left: 30%;
      bottom: 20%;
    }
    .stairs {
      overflow: hidden;
      height: 225%;
      bottom: 74%;
      right: 35%;
      z-index: -1;
    }
  }
  .map-item-2 {
    top: 658%;
    z-index: -1;
    .map-block {
      .image {
        margin: auto;
      }
    }
    .map-label {
    }
    .player {
      left: 30%;
      bottom: 20%;
    }
    .stairs {
      overflow: hidden;
      height: 225%;
      bottom: 78%;
      left: 34%;
      z-index: -1;
    }
  }
  .map-item-1 {
    top: 701%;
    .map-block {
      .image {
        margin: auto;
      }
    }
    .map-label {
    }
    .player {
      left: 30%;
      bottom: 20%;
    }
    .stairs {
      overflow: hidden;
      height: 140%;
      bottom: 48%;
      left: 58%;
      z-index: -1;
    }
  }
  .map-item-0 {
    top: 772%;
    left: 6%;
    .map-block {
      z-index: 2;
    }
    .player {
      left: 25%;
      bottom: 25%;
      z-index: 2;
    }
    .stairs {
      overflow: hidden;
      height: 200%;
      bottom: 40%;
      left: 28%;
      z-index: 1;
    }
  }

</style>
