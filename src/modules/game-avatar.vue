<template lang="html">
  <div class="game-avatar" :class="locked?'locked':''" :id="'avatar-'+name">
    <v-button class="no-style" to="/map" :disabled="locked">
      <v-image :src="'avatars/'+name+'.png'"/>
    </v-button>
    <div class="progress"></div>
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
</script>

<style lang="scss">
  .game-avatar {
    width: 10em;
    height: 10em;
    position: relative;
    border: 1px solid black;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &.locked {
        &:after {
          content: "";
          position: absolute;
          top: 0; right: 0;bottom: 0;left: 0;
          background-color: #000000bb;
          z-index: 4;
          border-radius: 50%;
          background-image: url('../../public/images/lock.png');
          background-size: 40%;
          background-repeat: no-repeat;
          background-position: center;
        }
    }
    .button {
      width: 9em;
      height: 9em;
      overflow: hidden;
      border-radius: 50%;
      display: inline-block;
      border: 1px solid black;
      border-radius: 50%;
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
