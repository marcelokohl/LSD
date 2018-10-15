<template>

  <router-link
    v-if="to"
    :to="to"
    :tag="tag"
    class="button"
  >
    <slot></slot>
  </router-link>
  <a
    v-else-if="back"
    href="javascript:history.go(-1)"
    :tag="tag"
    class="button"
  >
    <slot></slot>
  </a>

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
    },
    href: {
      default: '',
      type: String
    },
    back: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";
  @import "@/scss/breakpoints.scss";

  .button {

    &:not(.no-style) {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      margin-bottom: 2rem;
      width: 100%;
    }

    &.link {
      font-size: 1.1rem;
      font-family: font(button);
      color: color(button-primary);
      margin-bottom: 1.1em;
      display: inline-block;
    }

    &:not(.link):not(.no-style) {
      background-color: color(button);
      height: 3em;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.2em;
      color: #fff;
      font-size: 1.7rem;
      font-family: font(button);
      border: 2px solid black;

      &.primary {
        background-color: color(button-primary);
      }

      .icon {
        height: 1.7rem;
        margin: 0 .6rem 0 0;
      }
    }
  }
</style>
