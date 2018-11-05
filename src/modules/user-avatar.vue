<template lang="html">
  <div class="user-avatar">
    <v-button class="no-style" to="/profile">
      <v-image src="default-avatar.png"/>
    </v-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/breakpoints.scss";

  .user-avatar {
    font-size: 60px;
    @include breakpoint-desktop() {
      font-size: 90px;
    }
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 2;
    
    .button {
      width: 1em;
      height: 1em;
      border: 1px solid black;
      border-radius: 50%;
      background: #fff;
      overflow: hidden;
      background-color: color(yellow);
      // margin: 1em;
      display: flex;
      align-items: center;
      justify-content: center;

      .image {
        border: 1px solid black;
        border-radius: 50%;
        width: .87em;
        height: .87em;
      }
    }
  }
</style>
