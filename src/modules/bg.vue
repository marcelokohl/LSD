<template lang="html">
  <div id="bg" class="bg">
    <div class="bg-noise"></div>
    <div class="bg-inner" v-if="page_to != 'map'">
      <div class="bg-wave">
        <div class="bg-wave-top"><div class="bg-wave-inner"></div></div>
        <div class="bg-wave-bottom"><div class="bg-wave-inner"></div></div>
      </div>
    </div>
    <div class="bg-inner-map"></div>
    <o-clouds image="clouds/1.png"/>
  </div>
</template>

<script>
  import jquery from 'jquery'
  export default {
    mounted() {
      if (jquery('.page .container').height() > jquery('#app').height()) {
        // jquery('#bg').height(jquery('.page .container').height())
      }
      jquery('.page-content').scroll(function() {
        jquery('#bg').css('top',-(jquery('.page-content').scrollTop()/2)+'px')
      });
    },
  }
</script>

<style lang="scss">
#bg {
  position: absolute;
  top: 0; right: 0;bottom: 0;left: 0;
  z-index: 1;
  background-color: #6CDAF2;
  transition: background-color .6s;

  &.bg-home {
    .bg-wave {
      .bg-wave-bottom, .bg-wave-top {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .bg-particles {
      transform: scale(0.8);
    }
    .bg-wave {
      transform: scale(1);
    }
  }
  &.bg-arcade, &.bg-ranking {
    background-color: #390043;
  }
  &.bg-map {
    .bg-inner-map {
      opacity: 1;
    }
  }
  .bg-inner-map {
    opacity: 0;
    transition: opacity .6s;
    // z-index: 1;
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#420051+0,c0389a+50,7db9e8+100 */
    background: #420051; /* Old browsers */
    background: -moz-linear-gradient(top, #420051 0%, #c0389a 50%, #7db9e8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #420051 0%,#c0389a 50%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #420051 0%,#c0389a 50%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#420051', endColorstr='#7db9e8',GradientType=0 ); /* IE6-9 */
  }

  .bg-inner {
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;
  }
  .bg-noise {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 4;
    background-image: url('../assets/images/noise.png');
    opacity: .15;
  }
  .bg-wave {
    position: absolute;
    top: 0; right: 0;bottom: 0;left: 0;
    transform: scale(1.2);
    transition: 1s;
    z-index: 3;

    .bg-wave-bottom, .bg-wave-top {
      position: absolute;
      transition: 1s;
    }
    .bg-wave-top {
      background-color: #500d56;
      top: 0; right: 0; bottom: calc(50% + 275px); left: 0;
      transform: translateY(calc(-100% - 240px));
      .bg-wave-inner {
        background-image: url('../assets/images/bg-wave-top.svg');
        animation: slide-wave-top 40s linear infinite;
        width: 100%;
        height: 240px;
        position: absolute;
        bottom: -240px;
      }
    }
    .bg-wave-bottom {
      background-color: #c660a4;
      top: calc(50% + 275px); right: 0; bottom: 0; left: 0;
      transform: translateY(calc(100% + 240px));
      .bg-wave-inner {
        background-image: url('../assets/images/bg-wave-bottom.svg');
        animation: slide-wave-top 50s linear infinite;
        width: 100%;
        height: 150px;
        position: absolute;
        top: -150px;
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
