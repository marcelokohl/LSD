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
  }
</style>
