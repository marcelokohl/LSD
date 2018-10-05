<template lang="html">
  <div class="o-star">

  </div>
</template>

<script>
export default {
  // mounted: function () {
  //   var i = 1;
  //   setInterval(function(){
  //     // this.$refs.style.backgroundImage = "url('star/"+i+".png')";
  //     // i = i==3?1:++i;
  //     // console.log(1);
  //   }, 300);
  // }
}
</script>

<style lang="scss">
  .o-star {
    width: 20px;
    height: 20px;
    animation-name: test;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-timing-function: linear;
    background-repeat: no-repeat;
    background-position: center;
  }

  @-webkit-keyframes test {
    // 0% {
    //   background-image: url('../../public/images/star/2.png');
    // }
    0% {
      background-image: url('../../public/images/star/2.png');
    }
    33% {
      background-image: url('../../public/images/star/3.png');
    }
    80% {
      background-image: url('../../public/images/star/4.png');
    }
    100% {
      background-image: url('../../public/images/star/5.png');
    }
    // 100% {
    //   background-image: url('../../public/images/star/5.png');
    // }
  }
</style>
