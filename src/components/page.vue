<template>
  <main class="page" :class="name?'page-'+name:''">
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss">
  .page {
    text-align: center;
  }
</style>
