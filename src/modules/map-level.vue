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
        <v-image class="player" src="map/diplo.png"/>
      </div>
      <v-image class="map-key" src="map/key.png"/>
      <!-- <v-image class="map-key" src="map/key.png"/> -->
    </template>

    <!-- LEVEL 11 -->
    <template v-else-if="level == 11">
      <div class="map-block">
        <v-image src="map/green-planet.png"/>
      </div>
      <div class="map-addons">
        <!-- <v-image src="map/planet-trail-3.png"/> -->
        <v-image class="player" src="map/diplo.png"/>
      </div>
    </template>

    <!-- LEVEL 10 -->
    <template v-else-if="level == 10">
      <div class="map-block">
        <v-image src="map/orange-planet.png"/>
      </div>
      <div class="map-addons">
        <!-- <v-image src="map/planet-trail-2.png"/> -->
        <v-image class="player" src="map/diplo.png"/>
      </div>
    </template>

    <!-- LEVEL 9 -->
    <template v-else-if="level == 9">
      <div class="map-block">
        <v-image src="map/green-planet.png"/>
      </div>
      <div class="map-addons">
        <!-- <v-image src="map/planet-trail-1.png"/> -->
        <v-image class="player" src="map/diplo.png"/>
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
        <v-image class="player" src="map/sia.png"/>
      </div>
      <v-image class="locker" src="map/locker.png"/>
      <v-image class="map-key" src="map/key.png"/>
      <!-- <v-image class="map-key" src="map/key.png"/> -->
    </template>

    <!-- LEVEL 7 -->
    <template v-else-if="level == 7">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="rainbow" src="map/raibow-way.png"/>
        <v-image class="player" src="map/sia.png"/>
      </div>
    </template>

    <!-- LEVEL 6 -->
    <template v-else-if="level == 6">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="rainbow" src="map/raibow-way.png"/>
        <v-image class="player" src="map/sia.png"/>
      </div>
    </template>

    <!-- LEVEL 5 -->
    <template v-else-if="level == 5">
      <div class="map-block">
        <v-image src="map/clouds.png"/>
      </div>
      <div class="map-addons">
        <v-image class="rainbow" src="map/raibow-way.png"/>
        <v-image class="player" src="map/sia.png"/>
      </div>
    </template>

    <!-- LEVEL 4 -->
    <template v-else-if="level == 4">
      <div class="map-block">
        <v-image src="map/platform-white-flowers.png"/>
      </div>
      <div class="map-addons">
        <v-image class="sia" src="map/sia.png"/>
        <v-image class="boss" src="map/boss-labrinth.png"/>
        <v-image class="player" src="map/labrinth.png"/>
      </div>
      <v-image class="locker" src="map/locker.png"/>
      <v-image class="map-key" src="map/key.png"/>
    </template>

    <!-- LEVEL 3 -->
    <template v-else-if="level == 3">
      <div class="map-block">
        <v-image src="map/montanha.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <v-image class="player" src="map/labrinth.png"/>
      </div>
    </template>

    <!-- LEVEL 2 -->
    <template v-else-if="level == 2">
      <div class="map-block">
        <v-image src="map/montanha.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <v-image class="player" src="map/labrinth.png"/>
      </div>
    </template>

    <!-- LEVEL 1 -->
    <template v-else-if="level == 1">
      <div class="map-block">
        <v-image src="map/platform-pink-flowers.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
        <v-image class="player" src="map/labrinth.png"/>
      </div>
    </template>

    <!-- LEVEL 0 -->
    <template v-else-if="level == 0">
      <div class="map-block">
        <v-image src="map/floor-pink-flowers.png"/>
      </div>
      <div class="map-addons">
        <div class="stairs"><v-image src="map/stairs.png"/></div>
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
    current: {
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
        if(this.current == this.level) {
          c +=  ' current'
        }
        // if(this.current > this.level) {
        //   c +=  ' opened'
        // }
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
    transform: scale(.7);
    &.locked {
      .map-block, .map-addons {
        filter: brightness(.3);
      }
    }
    &.current {
      .player {
        display: block;
      }
      .diplo, .sia, .labrinth {
        filter: brightness(.3);
      }
      .map-key {
        display: none;
      }
    }

    &:not(.locked):not(.current) {
      .diplo, .sia, .labrinth, .locker, .map-key {
        display: none;
      }
    }

    .map-label {
      // display: none;
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
    .map-key, .locker {
      position: absolute;
    }
    .player {
      display: none;
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
      bottom: 191%;
      left: 75%;
    }
    .boss {
      left: 31%;
      bottom: 82%;
    }
    .map-label {
      bottom: 28%;
    }
    .player {
      left: 83%;
      bottom: -122%;
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
    .player {
      left: 10%;
      bottom: -283%;
      transform: scaleX(-1);
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
    .player {
      left: 80%;
      bottom: -203%;
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
    .player {
      left: 10%;
      bottom: -283%;
      transform: scaleX(-1);
    }
  }
  .map-item-8 {
    top: 385%;
    z-index: 4;
    .map-block {
      padding-left: 58%;
    }
    .map-label {
      padding-left: 39%;
      bottom: 5%;
    }
    .map-key {
      bottom: 223%;
      left: 82%;
    }
    .locker {
      bottom: 585%;
      left: 51%;
    }
    .boss {
      right: -12%;
      bottom: 86%;
    }
    .diplo {
      bottom: 432%;
      left: 48%;
    }
    .player {
      left: 28%;
      bottom: 96%;
    }
  }
  .map-item-7 {
    top: 409%;
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
    .player {
      left: -4%;
      bottom: -27%;
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
      bottom: 35%;
      left: 32%;
      z-index: -1;
      transform: scaleX(-1);
    }
    .player {
      left: 90%;
      bottom: -10%;
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
    .player {
      left: -3%;
      bottom: -10%;
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
      bottom: 132%;
      left: 41%;
    }
    .locker {
      bottom: 157%;
      left: 47%;
    }
    .boss {
      bottom: 49%;
      left: 29%;
      transform: scaleX(-1);
    }
    .map-key {
      bottom: 65%;
      left: 42%;
    }
    .player {
      left: 23%;
      bottom: 49%;
      z-index: 1;
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
      left: 42%;
      bottom: 86%;
      z-index: 1;
      transform: scaleX(-1);
    }
    .stairs {
      overflow: hidden;
      height: 192%;
      bottom: 84%;
      left: 21%;
      z-index: -1;
    }
  }
  .map-item-2 {
    top: 658%;
    z-index: 0;
    .map-block {
      z-index: 1;
      .image {
        margin: auto;
      }
    }
    .map-label {
    }
    .player {
      left: 42%;
      bottom: 86%;
      z-index: 1;
    }
    .stairs {
      overflow: hidden;
      height: 225%;
      bottom: 78%;
      left: 66%;
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
      left: 42%;
      bottom: 54%;
      transform: scaleX(-1);
    }
    .stairs {
      overflow: hidden;
      height: 149%;
      bottom: 50%;
      left: 21%;
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
      height: 231%;
      bottom: 0%;
      left: 58%;
      z-index: 1;
    }
  }

</style>
