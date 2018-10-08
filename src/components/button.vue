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
      font-size: 1.1em;
      font-family: font(button);
      color: #fff;
    }

    &:not(.link) {
      background-color: color(button);
      height: 3.4em;
      border-radius: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.2em;
      color: #fff;
      font-size: 1.7em;
      font-family: font(button);
      border: 2px solid black;
      .icon {
        height: 1.7em;
        margin: 0 .6em 0 0;
      }
    }
  }
</style>
