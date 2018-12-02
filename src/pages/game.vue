<template lang="html">
    <v-page name="game" :container="false">
      {{game}}
      <iframe id="game" :src="gameUrl" width="" height=""></iframe>
    </v-page>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    },
    game: {
      type: String
    }
  },
  computed: {
    gameUrl() {
      return 'https://lsd-game.herokuapp.com/game/?l='+this.level+'&g='+this.game
    }
  },
  methods: {
    gameMessage(event) {
      // alert(event.data.name)
      if(event.data.name == 'endCampaingLevel') { // QUANDO PASSAR O LEVEL
  			console.log('endCampaingLevel 2');
        this.$store.commit("SET_LEVEL", this.$store.state.user.game.campaign.process + 1); //SALVA O LEVEL PASSADO
      }
      else if(event.data.name == 'endArcadeLevel') { // QUANDO PASSAR NO MODO ARCADE
  			console.log('endArcadeLevel 2');
        this.$store.commit("SET_SCORE", event.score); // SALVA O SCORE PARA O GAME ATUAL (DIPLO, SIA OU LABRINTH)
      }
    }
  },
  mounted() {
    this.$store.commit("SET_GAME_NAME", this.game); // SETA O NOME DO GAME ATUAL
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
