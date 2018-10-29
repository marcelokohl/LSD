<template lang="html">
  <div id="clouds">
    <div class="cloud">
      <v-image :src="image"/>
    </div>
    <div class="clouds-inner">

    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import jquery from 'jquery'
// import inView from 'in-view'

export default {
  props: {
    image: {
      type: String,
      default: 'clouds/1.png'
    }
  },
  data() {
    return {
      cloud_id: 1
      // doc_focus: false
      // anime: {}
    }
  },
  mounted() {
    var i;
    var clouds = this
    var w = jquery('#app').width()
    var h = 3000
    var max = 24
    // var h = jquery('.page-content .page').height()

    console.log(h);

    window.addEventListener('focus', function startTimer() {
      jquery('.clouds-inner .cloud').remove();
      for (i = 0; i < max; i++) {
        clouds.createCloud(
          (Math.random() * w) + 'px',
          (Math.random() * h) + 'px'
        );
      }
    });

    for (i = 0; i < max; i++) {
      clouds.createCloud(
        (Math.random() * w) + 'px',
        (Math.random() * h) + 'px'
      );
    }

    setInterval(function(){
      jquery( ".clouds-inner .cloud" ).each(function( index ) {
      	var bounds = this.getBoundingClientRect();
        if (!(bounds.left < window.innerWidth)) {
          clouds.createCloud(-(jquery(this).width()) + 'px',
            (Math.random() * h) + 'px'
          );
          jquery(this).remove();
        }

      });
    }, 1000);
  },
  methods: {
    createCloud: function(x, y) {
      this.cloud_id++
      var new_cloud = jquery('#clouds > .cloud')
        .clone()
        .addClass("cloud-" + this.cloud_id)
        .css({'top':y,'left':x})
        .appendTo('#clouds .clouds-inner');

      anime({
        targets: ".cloud-" + this.cloud_id,
        translateX: jquery('#clouds').width()*2,
        duration: ((Math.random() * 200)+100)*jquery('#clouds').width(),
        easing: 'linear',
      });
    }
  }
}
</script>

<style lang='scss'>
#clouds {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  left: 0;
  & >.cloud {
    display: none;
  }
  .clouds-inner {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    left: 0;

    & >.cloud {
      position: absolute;
      .image {
        max-width: none;
      }
    }
  }
}
</style>
