<template lang="html">
    <v-page name="game" :container="false">
      <iframe id="game" :src="gameUrl" width="" height=""></iframe>
    </v-page>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  computed: {
    gameUrl() {
      return 'http://localhost/Work/LSD/game/game/?l='+this.level
    }
  },
  methods: {
    gameMessage(event) {
      if(event.name == 'startGame') {
        console.log(event);
        this.$store.commit("SET_LEVEL", 6);
      }
    }
  },
  mounted() {
    window.addEventListener("message", this.gameMessage, false);
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
