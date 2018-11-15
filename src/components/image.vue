<template>
  <img class="image" :src="image" />
</template>

<script>
export default {
  props: {
    src: String,
    remote: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    image: function() {
      if (this.remote) return this.src;
      return require('@/assets/images/'+this.src)
    },
  }
}
</script>

<style lang="scss">
  .image {
    display: block;
    max-width: 100%;
  }
</style>
