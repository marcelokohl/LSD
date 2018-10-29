<template lang="html">
  <v-page name="ranking" :container="true">
    <!-- <v-user-avatar /> -->
    <div class="avatar-tabs">
      <v-game-avatar @click.native="tab=0" name="labrinth" mode="arcade" :class="tab==0?'active':''"/>
      <v-game-avatar @click.native="tab=1" name="sia" mode="arcade" :class="tab==1?'active':''"/>
      <v-game-avatar @click.native="tab=2" name="diplo" mode="arcade" :class="tab==2?'active':''"/>
    </div>
    <v-text class="title">Ranking</v-text>
    <div class="ranking-grid">
      <div class="my-position">
        <v-text class="subtitle">My position</v-text>
        <v-text class="rank">{{$store.state.user.games.arcade['sia'].rank}}</v-text>
        <v-text class="score">{{$store.state.user.games.arcade['sia'].score}}pts</v-text>
        <v-button tag="button" class="primary" :to="{name:'arcade'}">
          Back to Arcade
        </v-button>
      </div>
      <div class="ranking-list">
        <v-text class="title">{{tabs[tab].label}} - Top 20 - <a href="#">Play</a> </v-text>
        <div :title="item.pos + '-' + item.name + '-' + item.score" class="ranking-item" v-for="item in $store.state.ranking[tabs[tab].name]" :key="item.pos">
          <v-text class="pos">{{item.pos}}</v-text>
          <v-text class="name" >{{item.name}}</v-text>
          <v-text class="score">{{item.score}}</v-text>
        </div>
      </div>
    </div>
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
  @import "@/scss/colors.scss";
  @import "@/scss/breakpoints.scss";

  .page-ranking {
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
        font-size: 0.8em;
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
    .my-position {
      .subtitle {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: .4rem;
      }
      .rank {
        font-size: 5rem;
        color: color(yellow);
      }
      .score {
        font-size: 1.4rem;
        color: color(white);
        margin-bottom: 2rem;
      }
    }
    .ranking-grid {
      width: 100%;
    }
    .ranking-list {
      .title {
        margin: 0;
        font-size: 1.4em;
        border-bottom: .23em solid;
      }
      .ranking-item {
        display: flex;
        // width: 100%;
        justify-content: space-between;
        color: #fff;
        margin: 0.5em 0.5em;
        font-size: 1.5rem;

        .text {
          &.pos {
            width: 13%;
            text-align: left;
          }
          &.name {
            width: 47%;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &.score {
            width: 40%;
            text-align: right;
          }
        }
      }
    }

    @include breakpoint-desktop() {
      .ranking-grid {
        // display: flex;
        width: 100%;
        max-width: 50rem;
        &>* {
          width: 50%;
          padding: 0 2em;
          float: left;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
