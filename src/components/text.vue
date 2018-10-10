<template lang="html">
  <p class="text"><slot></slot></p>
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
  }
</style>
