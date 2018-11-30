<template lang="html">
  <div class="logo">
    <v-image src="logo.png"/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/breakpoints.scss";
  .logo {
    text-align: center;
    .image {
      max-width: 400px;
      display: inline;
    }

    &.big {
      .image {
        width: 500px;
      }
    }

    @include breakpoint-desktop() {
      .image {
        width: 400px;
      }
    }
  }
</style>
