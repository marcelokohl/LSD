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
      <v-button tag="button" class="primary button-spotify" :click="loginWithSpotify">
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
  // mounted: function() {
  //   // this.$router.query;
  //   // debugger;
  // },
  methods: {
    setLang: function(value) {
      this.$setLang(value);
    },
    loginWithSpotify() {
      this.login(function(accessToken) {
        getUserData(accessToken).then(function(response) {
          console.log(response);
        });
      });
    },

    // https://accounts.spotify.com/pt-BR/authorize?client_id=d3cd2cb415074722a3f2e70ec43f136f&redirect_uri=https://lsd-api-staging.herokuapp.com/api/v1/auth/spotify/callback&response_type=code&scope=user-read-recently-played playlist-read-private user-follow-modify playlist-modify-public user-read-private user-read-email ugc-image-upload user-library-modify user-library-read&state=be288d43a40e3d926da62e496e3d975ba3d8ed2c0507b71b

    login(callback) {

      function getLoginURL() {
        // return "https://accounts.spotify.com/pt-BR/authorize?client_id=d3cd2cb415074722a3f2e70ec43f136f&redirect_uri=https://lsd-api-staging.herokuapp.com/api/v1/auth/spotify/callback&response_type=code&scope=user-read-recently-played playlist-read-private user-follow-modify playlist-modify-public user-read-private user-read-email ugc-image-upload user-library-modify user-library-read&state=be288d43a40e3d926da62e496e3d975ba3d8ed2c0507b71b";

        const scopes = [
          "user-read-recently-played",
          "playlist-read-private",
          "user-follow-modify",
          "playlist-modify-public",
          "user-read-private",
          "user-read-email",
          "ugc-image-upload",
          "user-library-modify",
          "user-library-read"
        ];

        const AUTHORIZE_URL = "https://accounts.spotify.com/pt-BR/authorize";
        const CLIENT_ID = "d3cd2cb415074722a3f2e70ec43f136f";
        const REDIRECT_URI =
          "https://lsd-api-staging.herokuapp.com/api/v1/auth/spotify/callback";
        const STATE = "be288d43a40e3d926da62e496e3d975ba3d8ed2c0507b71b";

        return `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${scopes}&state=${STATE}`;
      }

      var url = getLoginURL();

      var width = 450,
        height = 730,
        left = screen.width / 2 - width / 2,
        top = screen.height / 2 - height / 2;

      window.addEventListener(
        "message",
        function(event) {
          console.log("event", event);
          // var hash = JSON.parse(event.data);
          // if (hash.type == "access_token") {
          //   callback(hash.access_token);
          // }
        },
        false
      );

      var w = window.open(
        url,
        "Spotify",
        "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
          width +
          ", height=" +
          height +
          ", top=" +
          top +
          ", left=" +
          left
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/breakpoints.scss";

.page-home.page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
    top: auto;
    right: 0;
    bottom: -4px;
    left: 0;
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
