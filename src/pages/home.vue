<template lang="html">
  <v-page name="home">
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
      <v-button tag="button" class="primary" to="/main">
        <v-icon name="spotify"/>Login with Spotify
      </v-button>
      <v-button class="link" to="/login">- I don't have a Spotify Accound -</v-button>
    </div>
    <div class="players">
      <v-image class="image-sia" src="players/sia.png"/>
      <v-image class="image-labrinth" src="players/labrinth.png"/>
      <v-image class="image-diplo" src="players/diplo.png"/>
    </div>
  </v-page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/breakpoints.scss";

  .page-home .page {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    // max-width: 500px;
    // margin-left: -250px;
    overflow: hidden;

    // button.button {
    //   margin-bottom: 2em;
    // }
    //
    // .logo .image {
    //   height: 15em;
    //   margin-bottom: 4em;
    // }
    //
    // .content {
    //   position: absolute;
    //   top: 0; right: 0;bottom: 30%;left: 0;
    //
    //   // .stars {
    //   //   .o-star {
    //   //     position: absolute;
    //   //     top: -10px;
    //   //     left: 69-10px;
    //   //   }
    //   //   .o-star:nth-child(1) { top: 13%; left: 67%;}
    //   //   .o-star:nth-child(2) { top: 38%; left: 66%;}
    //   //   .o-star:nth-child(3) { top: 15%; left: 57%;}
    //   //   .o-star:nth-child(4) { top: 42%; left: 35%;}
    //   //   .o-star:nth-child(5) { top: 17%; left: 33%;}
    //   //   .o-star:nth-child(6) { top: 9%; left: 40%;}
    //   // }
    // }
    .content {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .players {
      position: absolute;
      top: auto; right: 0; bottom: -4px; left: 0;
      z-index: 1;

      @include breakpoint-tablet() {
        transform: scale(0.6);
      }

      .image {
        position: absolute;
        bottom: 0;
        left: 50%;
      }
      .image-labrinth {
        margin-left: -300px;
      }
      .image-sia {
        margin-left: -150px;
      }
      .image-diplo {
        margin-left: -1.8em;
        animation: home-diplo 5s infinite;
        animation-timing-function: ease-in-out;
      }
    }
  }
  @-webkit-keyframes home-diplo {
    0% { transform: translateY(-2em); }
    50% { transform: translateY(2em); }
    100% { transform: translateY(-2em); }
  }

</style>
