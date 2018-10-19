<template lang="html">
  <div class="game-avatar" :class="locked?'locked':''" :id="'avatar-'+name">
    <v-button class="no-style" :to="name=='arcade'?'/arcade':'/map'" :disabled="locked">
      <v-image :src="'avatars/'+name+'.png'"/>
    </v-button>
    <div class="progress" v-if="name != 'arcade'"></div>
  </div>
</template>

<script>
// import jQuery from 'jquery'

import ProgressBar from 'progressbar.js'

export default {
  props: {
    name: String,
    locked: Boolean,
    score: Number
  },
  mounted () {
    const colors = {
      'sia': '#ff0000',
      'diplo': '#0000ff',
      'labrinth': '#ffff00'
    }
    // console.log(colors.sia);
    if(this.name != 'arcade') {
      var bar = new ProgressBar.Circle('#avatar-'+this.name+' .progress', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: colors[this.name],
        svgStyle: null
      });
      bar.animate(this.score/100);
    }
  }
}
</script>

<style lang="scss">
  .game-avatar {
    width: 30rem;
    height: 20rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

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
            background-color: #000000bb;
            border-radius: 50%;
            // background-size: 4rem;
            bottom: 0;
          }
          .image {
            filter: brightness(1);
          }
      }

      .button {
        width: 8.7em;
        height: 8.7em;
        overflow: hidden;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid black;
        z-index: 2;
      }
    }
    .button {
      overflow: hidden;
      display: inline-block;
      z-index: 2;
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
