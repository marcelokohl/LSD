<template lang="html">
  <v-page name="made" :container="true">
    <!-- <v-user-avatar /> -->

    <!-- <div class="avatar-tabs">
    </div> -->
    <v-game-avatar name="labrinth" mode="arcade"/>
    <v-text class="title">You've made</v-text>
    <v-text class="user-score">{{2345}}pts</v-text>
    <v-text class="title">You best <v-text tag="span" class="yellow">4500pts</v-text> </v-text>
    <hr>
    <v-text class="title">You have 10 chances to double your points</v-text>
    <v-text class="title yellow">10 remaining</v-text>

    <v-button tag="button" class="primary" :to="{name:'arcade'}">
      Back to Arcade
    </v-button>

  </v-page>
</template>

<script>

export default {
  data() {
    return {
      tab: 0,
      tabs: [
        {name:'labrinth', label:'Labrinth'},
        {name:'sia', label:'Sia'},
        {name:'diplo', label:'Diplo'},
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/fonts.scss";
  @import "@/scss/colors.scss";
  @import "@/scss/breakpoints.scss";

  .page-made {
    align-items: initial;

    .game-avatar {
      margin: 0 auto;
    }
    .text.title {
      margin: 2rem;
    }
    .avatar-tabs {
      display: flex;
      justify-content: center;
      .game-avatar {
        font-size: font-size(s);
        margin: 0 1.1rem;
        cursor: pointer;
        &:after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background-color: color(purple);
          z-index: 2;
          border-radius: 50%;
          opacity: 0.6;
          transition: 0.3s;
        }
        &.active {
          &:after {
            opacity: 0;
          }
        }
      }
    }
    .user-score {
      font-size: 5rem;
      color: color(white)
    }
  }
</style>
