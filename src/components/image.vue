<template>
  <img class="image" :src="image" />
</template>

<script>
export default {
  props: {
    src: String
  },
  computed: {
    image: function() {
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
