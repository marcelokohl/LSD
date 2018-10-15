<template lang="html">
  <v-page name="arcade">
    <v-user-avatar />
    <v-game-avatar name="labrinth"/>
    <v-game-avatar name="sia"/>
    <v-game-avatar name="diplo" locked="true"/>
    <v-button tag="button" class="" :to="{name:'ranking'}">
      ranking
    </v-button>
    <v-button tag="button" class="primary" :to="{name:'main'}">
      Back to Campaign
    </v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
