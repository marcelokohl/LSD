<template lang="html">
  <div class="game-list-item" >
    <v-game-avatar :name="name" :locked="locked" :score="score"/>
    <div class="">
      <v-text>Position</v-text>
      <v-text>36</v-text>
      <v-text>3600pts</v-text>
    </div>
    <v-button tag="button" to="/map">
      Play
    </v-button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    locked: Boolean,
    score: Number
  },
}
</script>

<style lang="scss">
  .game-list-item {
    display: flex;
  }
</style>
