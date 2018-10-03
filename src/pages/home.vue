<template lang="html">
  <v-page name="home">
    <div class="content">
      <v-image src="logo.png"/>
      <hr>
      <v-link tag="button" class="primary" to="/main">
        <v-icon name="spotify"/>Login with Spotify
      </v-link>
      <hr>
      <v-link to="/login">- I don't have a Spotify Accound -</v-link>
    </div>
    <div class="bg">
      <div class="bg-top">

      </div>
      <div class="bg-wave">

      </div>
      <div class="bg-bottom">

      </div>

    </div>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  .page-home {
    .bg, .content {
      position: absolute;
      top: 0; right: 0;bottom: 0;left: 0;
    }
    .content {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .bg {
      z-index: 1;
      background: blue;
      .bg-top {
        background-color: #500d56;
        position: absolute;
        top: 0; right: 0;bottom: 50%;left: 0;
      }
      .bg-bottom {
        background-color: #c660a4;
        position: absolute;
        top: 50%; right: 0;bottom: 0;left: 0;
      }
      .bg-wave {
        background-image: url('../../public/images/bg-wave.svg');
        width: 100%;
        height: 550px;
        background-size: auto 100%;
        position: absolute;
        z-index: 2;
        top: 50%;
        margin-top: -275px;
        -webkit-animation: slide 30s linear infinite;
      }
    }
  }
@-webkit-keyframes slide {
  from { background-position: 0 0; }
  to { background-position: -1420px 0; }
}
</style>
