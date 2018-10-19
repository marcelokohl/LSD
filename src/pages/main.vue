<template lang="html">
  <v-page name="main" :container="true">
    <v-user-avatar />
    <v-image class="image-title" :src="'titles/campaign-'+$getLang()+'.png'"/>
    <v-text class="title">Select your player</v-text>
    <div class="game-avatars">
      <v-game-avatar name="labrinth" :score="90"/>
      <v-game-avatar name="sia" :score="30"/>
      <v-game-avatar name="diplo" :score="0" :locked='true'/>
    </div>
    <v-image class="image-title" :src="'titles/arcade-'+$getLang()+'.png'"/>
    <v-game-avatar name="arcade" :locked='true'/>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  @import "@/scss/breakpoints.scss";

  .page-main {
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


    @include breakpoint-desktop() {
      .game-avatars {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
    }
  }
</style>
