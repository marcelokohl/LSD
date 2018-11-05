<template lang="html">
  <div class="text"><slot></slot></div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/fonts.scss";

  .text {
    font-size: 1em;
    font-family: font(text);
    margin: 0;

    &.title {
      color: #fff;
      margin-bottom: 2rem;
      font-size: 2.6rem;
      text-transform: uppercase;
      -webkit-text-stroke: 1px black;
    }
    &.subtitle {
      color: #fff;
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
</style>
