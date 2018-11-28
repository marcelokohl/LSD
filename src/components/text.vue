<template lang="html">
  <div :is="tag" class="text"><slot></slot></div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/fonts.scss";
  @import "@/scss/colors.scss";

  .text {
    // font-size: font-size(s);
    font-family: font(text);
    margin: 0;

    &.title {
      color: #fff;
      margin-bottom: 2rem;
      font-size: font-size(l);
      text-transform: uppercase;
      -webkit-text-stroke: 1px black;
    }
    &.subtitle {
      color: #fff;
      margin-bottom: 2rem;
      font-size: font-size(s);
    }
    &.uppercase {
      text-transform: uppercase;
    }

    &.primary {
      color: color(pink)
    }
    &.yellow {
      color: color(yellow)
    }
  }
</style>
