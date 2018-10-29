<template lang="html">
  <v-page name="arcade" :container="true">
    <!-- <v-user-avatar /> -->
    <v-image class="image-title" :src="'titles/arcade-'+$getLang()+'.png'"/>
    <v-text class="title">Select your player</v-text>
    <div class="game-avatars">
      <v-game-avatar name="labrinth"  mode="arcade"/>
      <v-game-avatar name="sia"  mode="arcade"/>
      <v-game-avatar name="diplo"  mode="arcade"/>
    </div>
    <div class="arcade-buttons">
      <v-button tag="button" class="" :to="{name:'ranking'}">
        ranking
      </v-button>
      <v-button tag="button" class="primary" :to="{name:'main'}">
        Back to Campaign
      </v-button>
    </div>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  @import "@/scss/breakpoints.scss";

  .page-arcade {
    .image-title {
      max-width: 22em;
      margin-bottom: 1.5rem;
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 6em!important;
      max-width: none!important;
    }
    .game-avatar {
      margin: .75rem;
    }
    .arcade-buttons {
      margin-top: 3em;
      max-width: 500px;
      width: 100%;
    }


    @include breakpoint-desktop() {
      .game-avatars {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
    }
  }
</style>
