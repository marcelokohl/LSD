<template>

  <router-link
    v-if="to"
    :to="to"
    :tag="tag"
    class="link"
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
</style>
