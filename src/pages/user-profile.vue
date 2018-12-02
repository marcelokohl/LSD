<template lang="html">
  <v-page name="user-profile" :container="true" >
    <div class="top" v-if="loggedIn">
      <v-button tag="a" class="no-style" :back="true">
        X
      </v-button>
      <v-button tag="a" class="no-style" :to="{name:'user-profile-edit'}">
        Edit
      </v-button>

    </div>
    <div class="profile-grid">
      <div class="user-menu" v-if="loggedIn">
        <v-user-avatar :avatar="user.image" :remote="true"/>
        <v-text class="nickname">{{user.nickname}}</v-text>
        <v-text class="country">{{user.country.name}}</v-text>

        <v-button tag="button" to="/main">
          Invite friends
        </v-button>
        <v-button tag="button" class="edit-button" :to="{name:'user-profile-edit'}">
          Edit
        </v-button>
        <v-button tag="button" class="primary close-button" to="/main">
          Close
        </v-button>
         <v-button tag="button" class="primary quit-button" to="/logout">
          Quit Game
        </v-button>
      </div>
      <div class="user-score" v-if="game && game.arcade">
        <template v-if="isGameArcade">
          <v-text class="title">My Score</v-text>
          <v-game-list-item name="labrinth" :is-arcade="isGameArcade" :score="game.arcade.labrinth"/>
          <v-game-list-item name="sia" :is-arcade="isGameArcade" :score="game.arcade.sia"/>
          <v-game-list-item name="diplo" :is-arcade="isGameArcade" :score="game.arcade.diplo"/>
        </template>
        
        <template v-else>
          <v-text class="title">My Progress</v-text>
          <v-game-list-item name="labrinth" :is-arcade="isGameArcade" :progress="campaignProgress"/>
          <v-game-list-item name="sia" :is-arcade="isGameArcade" :progress="campaignProgress"/>
          <v-game-list-item name="diplo" :is-arcade="isGameArcade" :progress="campaignProgress"/>
        </template>
       

        <v-button tag="button" class="primary quit-button" to="/logout">
          Quit Game
        </v-button>
      </div>
    </div>

  </v-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import dp from 'dot-prop';

export default {
  async mounted(){
    await this.me();
  },
  computed:{
    ...mapGetters(['avatar', 'user', 'game', 'campaignProgress', 'loggedIn']),
    isGameArcade () {
      return this.campaignProgress >= 13
    },
    isGameCampaign () {
      return this.campaignProgress <= 12
    },
  },
  methods: {
    ...mapActions(['me']),
  },
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
          font-size: font-size(l);
          text-transform: uppercase;
          color: #41B0FF;
          margin-top: 1rem;
        }
        .country {
          font-size: font-size(m);
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
          font-size: font-size(l);
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
