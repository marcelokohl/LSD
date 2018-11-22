<template>

  <router-link
    v-if="to"
    :to="to"
    :tag="tag"
    :class="theClass"
    :disabled="disabled || busy"
  >
    <slot></slot>
  </router-link>
  <a
    v-else-if="back"
    href="javascript:history.go(-1)"
    :class="theClass"
    :disabled="disabled || busy"
  >
    <slot></slot>
  </a>
  <button
    :type="buttonType"
    v-else
    @click.prevent="click"
    :class="theClass"
    :disabled="disabled || busy"
    >
    <slot></slot>
  </button>

</template>

<script>
export default {
  props: {
    icon: String,
    tag: {
      default: "a",
      type: String
    },
    to: {},
    href: {
      default: "",
      type: String
    },
    buttonType: {
      default: "button",
      type: String
    },
    back: {
      type: Boolean
    },
    click: {
      default: () => { },
      type: Function,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    busy: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    theClass() {
      var c = 'button'
      if (this.busy) c += ' busy'
      return c
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/fonts.scss";
@import "@/scss/breakpoints.scss";

.button {
  text-decoration: none;

  &[disabled="disabled"] {
    opacity: 0.5;
  }

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
      margin: 0 0.6rem 0 0;
    }
  }
}
</style>
