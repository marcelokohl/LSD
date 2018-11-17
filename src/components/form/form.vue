<template lang="html">
  <form class="" @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
</style>
