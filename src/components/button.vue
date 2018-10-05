<template>

  <router-link
    v-if="to"
    :to="to"
    :tag="tag"
    class="button"
  >
    <slot></slot>
  </router-link>

</template>

<script>
export default {
  props: {
    icon: String,
    tag: {
      default: 'a',
      type: String
    },
    to: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";
  .button {
    cursor: pointer;
    text-transform: uppercase;

    &.link {
      font-size: 20px;
      font-family: font(button);
      color: #fff;
    }

    &:not(.link) {
      background-color: color(button);
      height: 80px;
      border-radius: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      color: #fff;
      font-size: 26px;
      font-family: font(button);
      border: 2px solid black;
      .icon {
        height: 60px;
        margin: 0 20px 0 0;
      }
    }
  }
</style>
