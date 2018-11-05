<template lang="html">
  <v-page name="home" :container="true">
    <v-logo />
    <div class="content">
      <!-- <div class="stars">
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
      </div> -->
      <v-button tag="button" class="primary button-spotify" to="/main" @click.native="$store.state.logged = true">
        <v-icon name="spotify"/>{{$t().home.spotify_buttom}}
      </v-button>
      <v-button class="link" to="/login">{{$t().home.no_account_link}}</v-button>
    </div>
    <div class="players">
      <v-image src="players/all.png"/>
    </div>
  </v-page>
</template>

<script>
export default {
  mounted: function () {
    this.$store.state.logged = false
  },
  methods: {
    setLang: function(value) {
      this.$setLang(value);
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/breakpoints.scss";

  .page-home.page {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    // max-width: 500px;
    // margin-left: -250px;
    overflow: hidden;

    .container {
      height: 100vh;
    }

    .logo {
      margin-top: 10vh;
      margin-bottom: 4vh;
      .image {
        width: 48vh;
      }
    }
    .button-spotify {
      margin-bottom: 1.2em;
    }
    .content {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .players {
      position: absolute;
      top: auto; right: 0; bottom: -4px; left: 0;
      z-index: 1;
      pointer-events: none;
      transform-origin: bottom;

      // @include breakpoint-smart() {
      //   // transform: scale(0.6);
      //   .image{
      //     max-width: 20rem;
      //   }
      // }

      .image {
        margin: auto;
        height: 36vh;

        // position: absolute;
        // bottom: 0;
        // left: 50%;
      // }
      // .image-labrinth {
      //   margin-left: -300px;
      // }
      // .image-sia {
      //   margin-left: -150px;
      // }
      // .image-diplo {
      //   margin-left: -1.8em;
        // animation: home-diplo 5s infinite;
        // animation-timing-function: ease-in-out;
      }
    }
  }

</style>
