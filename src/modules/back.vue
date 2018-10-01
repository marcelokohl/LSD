<template>
  <v-link tag="button" :to="to">back</v-link>
</template>

<script>
export default {
  props: {
    to: String
  }
}
</script>

<style lang="scss">
  .image {
    display: block;
  }
</style>
