<template lang="html">
    <v-page name="game" :container="false">
      <!-- {{game}} -->
      <iframe id="game" :src="gameUrl" width="" height=""></iframe>
    </v-page>
</template>

<script>
export default {
  props: {
    game: {
      type: String,
      default: 'sia'
    },
    level: {
      type: String,
      default: '1'
    }
  },
  computed: {
    gameUrl() {
      return 'https://lsd-game.herokuapp.com/game/?l='+this.level+'&g='+this.game
    }
  },
  mounted() {
    setTimeout(function() {document.getElementById('game').contentWindow.focus();}, 1000);
  }
}
</script>

<style lang="scss">

  .page-game, .page.page-game > .container, .page-game iframe {
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;
    max-width: none;
    padding: 0;
  }
</style>
