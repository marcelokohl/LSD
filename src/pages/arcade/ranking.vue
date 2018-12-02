<template lang="html">
  <v-page name="ranking" :container="true">
    <!-- <v-user-avatar /> -->

    <div class="avatar-tabs">
      <v-game-avatar @click.native="tab=0" name="labrinth" mode="arcade" :class="tab==0?'active':''"/>
      <v-game-avatar @click.native="tab=1" name="sia" mode="arcade" :class="tab==1?'active':''"/>
      <v-game-avatar @click.native="tab=2" name="diplo" mode="arcade" :class="tab==2?'active':''"/>
    </div>

    <template v-if="getRankingByTab.length">
      <v-text class="title">Your best score</v-text>
      <v-text class="user-score">{{getMyBestScore}}pts</v-text>
      <div class="ranking-grid">
        <v-text class="title">Ranking</v-text>
        <div class="ranking-list">
          <div :title="item.user_nickname + ': ' + item.score + 'pts'" class="ranking-item" :class="isCurrentUser(item.user_id) ?'ranking-item-user':''" v-for="(item, $index) in getRankingByTab" :key="$index">
            <v-user-avatar />
            <v-text class="name" >{{item.user_nickname}}</v-text>
            <v-text class="score">{{item.score}}</v-text>
          </div>
        </div>
        <v-button tag="button" class="primary" :to="{name:'arcade'}">
          Back to Arcade
        </v-button>
      </div>
    </template>
    <template v-else>
      <v-text class="title primary">You haven't record any points yet</v-text>
      <v-text class="title">Make points and earn prizes</v-text>
      <v-button tag="button" :to="{name:'game'}">
        Play
      </v-button>
      <v-button tag="button" class="primary" :to="{name:'arcade'}">
        Back to Arcade
      </v-button>
    </template>

  </v-page>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import dp from 'dot-prop';

export default {
  async created() {
    await this.me();
    await this.getRanking({ artist: 'labrinth'});
    await this.getRanking({ artist: 'sia'});
    await this.getRanking({ artist: 'diplo'});
  },
  data() {
    return {
      tab: 0,
      tabs: [
        {name:'labrinth', label:'Labrinth'},
        {name:'sia', label:'Sia'},
        {name:'diplo', label:'Diplo'},
      ]
    }
  },
  computed: {
    ...mapGetters(['avatar', 'user', 'game', 'campaignProgress', 'ranking']),
    getRankingByTab(){
      const { tab, tabs, ranking } = this;
      return ranking[tabs[tab].name];
    },
    getMyBestScore(){
      const { tab, tabs, game} = this;
      return dp.get(game, `arcade.${tabs[tab].name}`, 0);
    },
  },
  methods: {
    ...mapActions(['getRanking', 'me']),
    isCurrentUser(id){
      return this.user.id == id;
    }
  },
}
</script>

<style lang="scss">
  @import "@/scss/fonts.scss";
  @import "@/scss/colors.scss";
  @import "@/scss/breakpoints.scss";

  .page-ranking {
    align-items: initial;
    
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 6em!important;
      max-width: none!important;
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
      color: color(yellow);
    }
    .ranking-grid {
      width: 100%;
    }
    .ranking-list {
      .title {
        margin: 0;
        font-size: font-size(m);
        border-bottom: .23em solid;
      }
      .ranking-item {
        display: flex;
        // width: 100%;
        justify-content: space-between;
        color: #fff;
        margin: 0.5em 0.5em;

        &.ranking-item-user {
          color: color(yellow);
        }

        & > .text {
          font-size: font-size(l);
          display: flex;
          align-items: center;

          &.name {
            width: 60%;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-left: font-size(l);
          }
          &.score {
            justify-content: flex-end;
            width: 40%;
            text-align: right;
          }
        }
      }
    }

    // @include breakpoint-desktop() {
    //   .ranking-grid {
    //     // display: flex;
    //     width: 100%;
    //     max-width: 50rem;
    //     &>* {
    //       width: 50%;
    //       padding: 0 2em;
    //       float: left;
    //       box-sizing: border-box;
    //     }
    //   }
    // }
  }
</style>
