<template lang="html">
  <div id="clouds" class="bg-clouds">
    <div id="cloud" class="cloud">
      <v-image src="clouds/1.png"/>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import jquery from 'jquery'
import inView from 'in-view'

export default {
  data() {
    return {
      cloud_id: 1
    }
  },
  mounted() {
    var i;
    for (i = 0; i < 7; i++) {
      this.createCloud(
        (Math.random() * jquery(window).width()) + 'px',
        (Math.random() * jquery(window).height()) + 'px'
      );
    }

  },
  methods: {
    createCloud: function(x, y) {
      this.cloud_id++
      var itm = document.getElementById("cloud");
      var cln = itm.cloneNode(true);
      var fff = this;
      var c = "cloud-" + this.cloud_id
      document.getElementById("clouds").appendChild(cln);
      // var www = jquery(cln).width()
      cln.className += " " + c;
      cln.style.left = x;
      cln.style.top = y;
      var duration = anime({
        targets: cln,
        translateX: 5000,
        duration: (Math.random() * 200000) + 100000,
        easing: 'linear'
      });

      inView("." + c).on('exit', function(el) {
        fff.createCloud(
          -jquery(el).width()+'px',
          (Math.random() * jquery(window).height()) + 'px'
        );
        jquery(el).remove();
      });

    }
  }
}
</script>

<style>
.bg-clouds {
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#cloud {
  /* width: 100px;
  height: 100px; */
  position: absolute;
  /* background-color: red; */
}
</style>
