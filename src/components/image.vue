<template>
  <img class="image" :src="'images/'+src"/>
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>

<style lang="scss">
  .image {
    display: block;
    max-width: 100%;
  }
</style>
