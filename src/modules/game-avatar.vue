<template lang="html">
  <div class="game-avatar">
    <v-button to="/map">[{{name}}]</v-button>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss">
  .game-avatar {
      font-size: 20px;
  }
</style>
