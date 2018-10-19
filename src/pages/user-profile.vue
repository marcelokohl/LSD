<template lang="html">
  <v-page name="user-profile" :container="true">
    <div class="top">
      <v-button tag="a" class="no-style" :back="true">
        X
      </v-button>
      <v-button tag="a" class="no-style" :to="{name:'user-profile-edit'}">
        Edit
      </v-button>

    </div>
    <v-user-avatar />
    <v-text>{{$store.state.nickname}}</v-text>
    <v-text>{{$store.state.country}}</v-text>
    <!-- <v-text>Brazil</v-text> -->

    <v-button tag="button" to="/main">
      Invite friends
    </v-button>
    <template v-if="$store.state.games.open_arcade_mode">
      <v-text>My Score</v-text>
      <v-game-list-item name="sia" :score="100"/>
      <v-game-list-item name="diplo" :score="33"/>
      <v-game-list-item name="labrinth" :score="0"/>
    </template>
    <template v-else>
      <v-text>My Progress</v-text>
      <v-game-list-item name="sia" :score="100"/>
      <v-game-list-item name="diplo" :score="2"/>
      <v-game-list-item name="labrinth" :score="0"/>
    </template>

    <v-button tag="button" class="primary" to="/">
      Quit Game
    </v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";
  @import "@/scss/breakpoints.scss";

  .page-user-profile {
    .page {
      background-color: #fff;

      .user-avatar {
        position: unset;
        font-size: 100px;
        display: flex;
        justify-content: center;
      }

      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
        .button {
          font-size: 2.1rem;
          font-family: font(button);
          color: color(button-primary);
          text-transform: uppercase;
          text-decoration: none;
        }
      }
    }
  }
</style>
