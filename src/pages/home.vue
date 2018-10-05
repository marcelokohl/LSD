<template lang="html">
  <v-page name="home">
    <div class="content">
      <div class="stars">
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
        <o-star/>
      </div>
      <v-logo/>
      <v-button tag="button" class="primary" to="/main">
        <v-icon name="spotify"/>Login with Spotify 2
      </v-button>
      <v-button class="link" to="/login">- I don't have a Spotify Accound -</v-button>
    </div>
    <div class="players">
      <v-image class="image-labrinth" src="players/labrinth.png"/>
      <v-image class="image-sia" src="players/sia.png"/>
      <v-image class="image-diplo" src="players/diplo.png"/>
    </div>
    <div class="bg">
      <div class="bg-top">

      </div>
      <div class="bg-wave">
        <div class="bg-wave-top"></div>
        <div class="bg-wave-bottom"></div>
        <div class="bg-wave-content">
          <o-cloud x="0" duration="300" cloud="2"/>
          <o-cloud x="-40" duration="220"/>
          <o-cloud x="20" duration="210"/>
          <o-cloud x="-70" duration="310"/>
          <o-cloud x="-30" duration="250" cloud="2"/>
          <o-cloud x="-80" duration="290"/>
          <o-cloud x="-90" duration="250"/>
          <o-cloud x="50" duration="280" cloud="2"/>
          <o-cloud x="70" duration="260"/>
          <o-cloud x="80" duration="220"/>
          <o-cloud x="-20" duration="210"/>
          <o-cloud x="10" duration="290"/>
          <o-cloud x="60" duration="290"/>
          <o-cloud x="0" duration="300"/>
          <o-cloud x="-10" duration="200"/>
          <o-cloud x="-50" duration="200"/>
          <o-cloud x="-60" duration="200"/>
          <o-cloud x="30" duration="200"/>
          <o-cloud x="90" duration="200"/>
          <o-cloud x="40" duration="200"/>
        </div>
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
    overflow: hidden;
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;

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
    .players {
      position: absolute;
      top: auto; right: 0; bottom: -4px; left: 0;
      z-index: 2;

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
        margin-left: 0;
      }
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
        width: 100%;
        height: 550px;
        background-size: auto 100%;
        position: absolute;
        z-index: 2;
        top: 50%;
        margin-top: -275px;

        .bg-wave-top {
          position: absolute;
          top: 0; right: 0;bottom: 0;left: 0;
          background-image: url('../../public/images/bg-wave-top.svg');
          animation: slide-wave-top 40s linear infinite;
          z-index: 3;
        }
        .bg-wave-bottom {
          position: absolute;
          top: 0; right: 0;bottom: 0;left: 0;
          background-image: url('../../public/images/bg-wave-bottom.svg');
          animation: slide-wave-top 50s linear infinite;
          z-index: 3;
        }
        .bg-wave-content {
          position: absolute;
          top: 0; right: 0;bottom: 0;left: 0;
          background-color: #97d9f1;
          z-index: 2;
          overflow: hidden;
        }
        .bg-wave-bg {
          position: absolute;
          top: 0; right: 0;bottom: 0;left: 0;
          background-color: #97d9f1;
          z-index: 1;
        }
      }
    }
  }
@-webkit-keyframes slide-wave-top {
  from { background-position: 0 0; }
  to { background-position: -1420px 0; }
}
@-webkit-keyframes slide-wave-bottom {
  from { background-position: -1420px 0; }
  to { background-position: 0 0; }
}
</style>
