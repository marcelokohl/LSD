<template lang="html">
  <div class="user-avatar">
    <v-button v-if="to" class="no-style user-avatar-inner">
      <v-image :src="getAvatarURI" :remote="avatar ? remote : false" />
    </v-button>
    <div v-else class="user-avatar-inner">
      <v-image :src="getAvatarURI" :remote="avatar ? remote : false" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: null,
    },
    remote: {
      type: Boolean,
      default: true,
    },
    to: {
      type: String
    }
  },
  computed: {
    getAvatarURI(){
      if (!this.avatar) return 'default-avatar.png';

      return this.avatar;
    },
  }
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

    &.logged {
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 2;
    }

    .user-avatar-inner {
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
