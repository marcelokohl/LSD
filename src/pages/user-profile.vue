<template lang="html">
  <v-page name="user-profile">
    <v-user-avatar />
    <v-text>Nickname</v-text>
    <v-text>Brazil</v-text>

    <v-button tag="button" to="/main">
      Invite friends
    </v-button>

    <v-text>My Score</v-text>
    <v-game-list-item name="sia" :score="30"/>
    <v-game-list-item name="diplo" :score="60"/>
    <v-game-list-item name="labrinth" :score="90"/>

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
</style>
