<template lang="html">
  <div id="clouds" class="clouds">
    <div class="cloud">
      <v-image class="cloud-type-white" src="clouds/1.png"/>
      <v-image class="cloud-type-red" src="clouds/3.png"/>
      <v-image class="cloud-type-blue" src="clouds/5.png"/>
      <v-image class="cloud-type-blue-gif" src="clouds/5.gif"/>
      <v-image class="cloud-type-planet-1" src="clouds/planet-1.png"/>
    </div>
    <div class="clouds-inner">

    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import jquery from 'jquery'

export default {
  props: {
  },
  data() {
    return {
      cloud_id: 1,
      cloud_type: 1
    }
  },
  mounted() {
    var i;
    var clouds = this
    var w = jquery('#app').width()
    var h = 3000
    var max = 18

    window.addEventListener('focus', function startTimer() {
      jquery('.clouds-inner .cloud').remove();
      for (i = 0; i < max; i++) {
        clouds.createCloud(
          (Math.random() * w),
          (Math.random() * h)
        );
      }
    });

    for (i = 0; i < max; i++) {
      clouds.createCloud(
        (Math.random() * w),
        (Math.random() * h)
      );
    }

    setInterval(function(){
      jquery( '.clouds-inner .cloud' ).each(function() {
      var bounds = this.getBoundingClientRect();
        if (!(bounds.left < window.innerWidth)) {
          clouds.createCloud(-(jquery(this).width()),(jquery(this).position().top));
          jquery(this).remove();
        }

      });
    }, 1000);
  },
  methods: {
    createCloud: function(x, y) {
      this.cloud_id++
      jquery('#clouds > .cloud')
        .clone()
        .addClass('cloud-' + this.cloud_id + ' cloud-line-'+Math.round(y / 300) + ' cloud-type-'+Math.round(Math.random()*6))
        .css({'top':y + 'px','left':x + 'px'})
        .appendTo('#clouds .clouds-inner');

      // console.log('clone.att: 'clone.attr('data-speed'));

      anime({
        targets: '.cloud-' + this.cloud_id,
        translateX: jquery('#clouds').width()*2,
        duration: ((Math.random() * 200)+100)*jquery('#clouds').width(),
        easing: 'linear',
      });
    }
  }
}
</script>

<style lang='scss'>
.clouds {
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
        display: none;
        max-width: none;
      }
    }
  }
}

.page-home,
.page-login,
.page-forgot,
.page-new-pass,
.page-new-account
{
  .clouds > .clouds-inner {
    .cloud {
      .image.cloud-type-white {
        display: block;
      }
    }
  }
}
.page-main {
  .clouds > .clouds-inner {
    .cloud-line-0, .cloud-line-1 {
      .image.cloud-type-white {
        display: block;
      }
    }
    .cloud-line-2 {
      .image.cloud-type-red {
        display: block;
      }
    }
  }
}
.page-map {
  .clouds > .clouds-inner {
    .cloud-line-10,
    .cloud-line-9,
    .cloud-line-8,
    .cloud-line-7
    {
      .image.cloud-type-white {
        display: block;
      }
    }
    .cloud-line-6,
    .cloud-line-5,
    .cloud-line-4,
    .cloud-line-3
    {
      .image.cloud-type-red {
        display: block;
      }
    }
    .cloud-line-2,
    .cloud-line-1,
    .cloud-line-0
    {
      &.cloud-type-1, &.cloud-type-2 {
        .image.cloud-type-planet-1 {
          display: block;
        }
      }
    }
  }
}
.page-arcade, .page-ranking {
  .clouds > .clouds-inner {
    .cloud {
      &.cloud-type-4 {
        .image.cloud-type-blue-gif {
          display: block;
        }
      }
      &:not(.cloud-type-4) {
        .image.cloud-type-blue {
          display: block;
        }
      }
    }
  }
}
</style>
