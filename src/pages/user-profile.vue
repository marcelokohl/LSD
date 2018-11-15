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
    <div class="profile-grid">
      <div class="user-menu">
        <v-user-avatar />
        <v-text class="nickname">{{this.$store.state.user.name}}</v-text>
        <v-text class="country">{{this.$store.state.user.country.name}}</v-text>

        <v-button tag="button" to="/main">
          Invite friends
        </v-button>
        <v-button tag="button" class="edit-button" :to="{name:'user-profile-edit'}">
          Edit
        </v-button>
        <v-button tag="button" class="primary close-button" to="/main">
          Close
        </v-button>
        <v-button tag="button" class="primary quit-button" to="/">
          Quit Game
        </v-button>
      </div>
      <div class="user-score">
        <template v-if="this.$store.state.user.game.campaign.process == 12">
          <v-text class="title">My Score</v-text>
          <v-game-list-item name="labrinth" :score="$store.state.user_old.games.arcade.sia.score"/>
          <v-game-list-item name="sia" :score="$store.state.user_old.games.arcade.sia.score"/>
          <v-game-list-item name="diplo" :score="$store.state.user_old.games.arcade.sia.score"/>
        </template>
        <template v-else>
          <v-text class="title">My Progress</v-text>
          <v-game-list-item name="labrinth" :progress="$store.state.user_old.games.campaing.labrinth.progress"/>
          <v-game-list-item name="sia" :progress="$store.state.user_old.games.campaing.sia.progress"/>
          <v-game-list-item name="diplo" :progress="$store.state.user_old.games.campaing.diplo.progress"/>
        </template>

        <v-button tag="button" class="primary quit-button" to="/">
          Quit Game
        </v-button>
      </div>
    </div>

  </v-page>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState({
      user: state => state.user,
      game: state => state.user.game,
    }),
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";
  @import "@/scss/breakpoints.scss";

  .page-user-profile {
    .page {
      background-color: #fff;

      .user-menu {
        .nickname {
          font-size: 2.3rem;
          text-transform: uppercase;
          color: #41B0FF;
          margin-top: 1rem;
        }
        .country {
          font-size: 1.8em;
          color: #D3188D;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .close-button {
          display: none;
        }
        .edit-button {
          display: none;
        }
        .quit-button {
          display: none;
        }
      }

      .user-score {
        .title {
          color: #600362;
        }
        .quit-button {
          display: block;
        }
      }

      .user-avatar {
        position: unset;
        font-size: 150px;
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

      @include breakpoint-desktop() {
        .top {
          display: none;
        }
        & > .container {
          max-width: none;
          height: 100%;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .profile-grid {
          width: 100%;
          max-width: 70rem;
          margin: 0 auto;

          &>* {
            width: 50%;
            padding: 0 4em;
            float: left;
            box-sizing: border-box;
          }
        }

        .user-menu {
          .close-button {
            margin-top: 4rem;
            display: block;
          }
          .edit-button {
            display: block;
          }
          .quit-button {
            display: block;
          }
        }

        .user-score {
          .quit-button {
            display: none;
          }
        }
      }

    }
  }
</style>
