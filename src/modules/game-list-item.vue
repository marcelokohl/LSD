<template lang="html">
  <div class="game-list-item" >
    <v-game-avatar :name="name" :locked="score<=0?true:false" :score="score"/>
    <div v-if="$store.state.games.open_arcade_mode">
      <v-text>Position</v-text>
      <v-text>{{ranking}}</v-text>
      <v-text>{{score}}pts</v-text>
    </div>
    <div v-else>
      <v-text>{{name}}</v-text>
      <v-text v-if="score == 0">Locked</v-text>
      <v-text v-else-if="score > 3">Complete</v-text>
      <v-text v-else-if="score == 3">Lvl 3</v-text>
      <v-text v-else-if="score == 2">Lvl 2</v-text>
      <v-text v-else-if="score == 1">Lvl 1</v-text>
    </div>
    <v-button tag="button" to="/map" :disabled="score<=0?true:false">
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
    ranking: Number
  },
}
</script>

<style lang="scss">
  .game-list-item {
    display: flex;
  }
</style>
