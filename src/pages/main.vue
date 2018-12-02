<template lang="html">
  <v-page name="main" :container="true">
    <v-image class="image-title" :src="'titles/campaign-'+$getLang()+'.png'"/>
    <v-text class="title">Select your player</v-text>
    <div class="game-avatars">
      <v-game-avatar name="labrinth" :to="{name:'map'}" :progress="getLabrinthProgress"/>
      <v-game-avatar name="sia" :to="{name:'map'}" :progress="getSiaProgress"/>
      <v-game-avatar name="diplo" :to="{name:'map'}" :progress="getDiploProgress"/>
    </div>
    <v-image class="image-title" :src="'titles/arcade-'+$getLang()+'.png'"/>
    <v-game-avatar name="arcade" :to="{name:'arcade'}" :mode="isArcadeUnlocked ? 'arcade':'locked'"/>
  </v-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const progressSteps = [0, 33, 66, 100];

export default {
  async mounted(){
    await this.me();
  },
  data() {
    return {
      game_levels: 4
    };
  },
  methods: {
    ...mapActions(['getRanking', 'me']),
    // theGameProgress: function(i) {
    //   if (this.campaignProgress < this.game_levels * i) return -1;
    //   else if (this.campaignProgress <= this.game_levels * i) return 0;
    //   else
    //     return (
    //       ((this.campaignProgress - this.game_levels * i) * 100) /
    //       this.game_levels
    //     );
    // }
  },
  computed: {
    ...mapGetters(["campaignProgress"]),
    getLabrinthProgress() {
      switch (this.campaignProgress) {
        case 1:
          return progressSteps[0];
          break;
        case 2:
          return progressSteps[1];
          break;
        case 3:
          return progressSteps[2];
          break;
        case 4:
          return progressSteps[3];
          break;

        default:
          return progressSteps[3];
          break;
      }
    },
    getSiaProgress() {
      if(this.campaignProgress < 5) return -1;
      switch (this.progress) {
        case 5:
          return progressSteps[0];
          break;
        case 6:
          return progressSteps[1];
          break;
        case 7:
          return progressSteps[2];
          break;
        case 8:
          return progressSteps[3];
          break;

        default:
          return progressSteps[3];
          break;
      }
    },
    getDiploProgress() {
      if(this.campaignProgress < 9) return -1;
      switch (this.campaignProgress) {
        case 9:
          return progressSteps[0];
          break;
        case 10:
          return progressSteps[1];
          break;
        case 11:
          return progressSteps[2];
          break;
        case 12:
          return progressSteps[3];
          break;

        default:
          return progressSteps[3];
          break;
      }
    },
    isArcadeUnlocked () {
      return this.campaignProgress >= 13
    },
  }
};
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
    padding-top: 6em !important;
    max-width: none !important;
  }
  .game-avatar {
    margin: 0.75rem;
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
