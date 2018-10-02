<template lang="html">
  <div class="game-avatar">
    <v-link to="/map">[{{name}}]</v-link>
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
