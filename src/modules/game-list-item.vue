<template lang="html">
  <div class="game-list-item" :class="'game-list-item-' + name">
    <template v-if="this.$store.state.user.game.campaign.process == 12">
      <v-game-avatar :name="name"/>
      <div class="game-avatar-info">
        <v-text>Position</v-text>
        <v-text>{{ranking}}</v-text>
        <v-text>{{score}}pts</v-text>
      </div>
    </template>
    <template v-else>
      <v-game-avatar :name="name" :progress="progress"/>
      <div class="game-avatar-info">
        <v-text class="name">{{name}}</v-text>
        <v-text v-if="progress == -1">Locked</v-text>
        <v-text v-else-if="progress >= 100">Complete</v-text>
        <v-text v-else-if="progress == 66">Lvl 3</v-text>
        <v-text v-else-if="progress == 33">Lvl 2</v-text>
        <v-text v-else-if="progress == 0">Lvl 1</v-text>
      </div>
    </template>
    <v-button tag="button" to="/map" :disabled="progress<=-1?true:false">
      Play
    </v-button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    locked: Boolean,
    score: Number,
    progress: {type:Number, default:-1},
    ranking: Number
  },
}
</script>

<style lang="scss">
  .game-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.8rem;

    &.game-list-item-labrinth {
      .game-avatar-info {
        color: #41B0FF;
      }
    }
    &.game-list-item-sia {
      .game-avatar-info {
        color: #D3188D;
      }
    }
    &.game-list-item-diplo {
      .game-avatar-info {
        color: #F57F00;
      }
    }

    &>.button {
      width: 20rem;
      flex-basis: 0;
      font-size: 1rem;
    }
    &>.game-avatar {
      font-size: .8rem;
    }
    .game-avatar-info {
      width: 100%;
      text-align: left;
      padding-left: 1.4rem;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }
</style>
