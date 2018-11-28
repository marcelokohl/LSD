<template lang="html">
  <div class="game-avatar" :class="the_class" :id="'avatar-'+name">
    <v-button class="no-style" :to="to" :disabled="the_locked">
      <v-image v-if="name == 'arcade'" src="arcade.gif"/>
      <v-image v-else :src="'avatars/'+name+'.png'"/>
    </v-button>
    <div class="progress" v-if="name != 'arcade' || mode == 'campaing'"></div>
  </div>
</template>

<script>
// import jQuery from 'jquery'

import ProgressBar from 'progressbar.js'

export default {
  props: {
    name: String,
    progress: {type: Number, default: -1},
    mode: {type: String, default: "campaing"},
    to: ''
  },
  computed: {
    the_progress: function() {
      if(this.progress < 0) {
        return 0
      } else {
        return this.progress > 100?100:this.progress
      }
    },
    the_locked: function() {
      if(this.mode == 'campaing') {
        return this.progress<=-1?true:false
      } else {
        return false
      }
    },
    the_class: function() {
      var c =''
      if (this.the_locked) {
        c += 'locked'
      }
      c += ' mode-'+this.mode
      return c
    },
  },
  mounted () {
    const colors = {
      'labrinth': '#41B0FF',
      'sia': '#D3188D',
      'diplo': '#EAE800',
    }

    if(this.name != 'arcade' || this.mode == 'campaing') {
      var bar = new ProgressBar.Circle('#avatar-'+this.name+' .progress', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: colors[this.name],
        svgStyle: null
      });
      bar.animate(this.the_progress/100);
    }
  }
}
</script>

<style lang="scss">
  $color_labrinth: #41B0FF;
  $color_sia: #D3188D;
  $color_diplo: #EAE800;

  .game-avatars {
    display: flex;
  }
  .game-avatar {
    width: 30rem;
    height: 20rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &.mode-arcade {
      &#avatar-labrinth {background-color: $color_labrinth}
      &#avatar-sia {background-color: $color_sia}
      &#avatar-diplo {background-color: $color_diplo}
    }

    &.locked {
      pointer-events: none;
        &:after {
          content: "";
          position: absolute;
          top: 0; right: 0;bottom: 6rem;left: 0;
          z-index: 4;
          background-image: url('../../public/images/lock.png');
          background-size: 4rem;
          background-repeat: no-repeat;
          background-position: center;
        }
        .image {
          filter: brightness(.4);
        }
    }

    &:not(#avatar-arcade) {
      width: 10em;
      height: 10em;
      border: 1px solid black;
      border-radius: 50%;
      background: #fff;

      &.locked {
          &:after {
            background-color: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            // background-size: 4rem;
            bottom: 0;
          }
          .image {
            filter: brightness(1);
          }
      }

      .button {
        width: 88%;
        height: 88%;
        overflow: hidden;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid black;
        z-index: 2;
        opacity: 1;
        padding: 0;
      }
    }
    .button {
      overflow: hidden;
      display: inline-block;
      z-index: 2;
      opacity: 1;
      .image {
        max-width: none;
        width: 100%;
      }
    }
    .progress {
      position: absolute;
      top: 0; right: 0;bottom: 0;left: 0;
    }
  }
</style>
