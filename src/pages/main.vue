<template lang="html">
  <v-page name="main" :container="true">
    <v-image class="image-title" :src="'titles/campaign-'+$getLang()+'.png'"/>
    <v-text class="title">Select your player</v-text>
    <div class="game-avatars">
      <v-game-avatar name="labrinth" :to="{name:'map'}" :progress="theGameProgress(0)"/>
      <v-game-avatar name="sia" :to="{name:'map'}" :progress="theGameProgress(1)"/>
      <v-game-avatar name="diplo" :to="{name:'map'}" :progress="theGameProgress(2)"/>
    </div>
    <v-image class="image-title" :src="'titles/arcade-'+$getLang()+'.png'"/>
    <v-game-avatar name="arcade" :to="{name:'arcade'}" :progress='1'/>
  </v-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      game_levels: 4
    };
  },
  methods: {
    theGameProgress: function(i) {
      if (this.campaignProgress < this.game_levels * i) return -1;
      else if (this.campaignProgress <= this.game_levels * i) return 0;
      else
        return (
          ((this.campaignProgress - this.game_levels * i) * 100) /
          this.game_levels
        );
    }
  },
  computed: {
    ...mapGetters(["campaignProgress"])
    // game_progress() {
    //   return this.$store.state.user.game.campaign.process
    // }
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
