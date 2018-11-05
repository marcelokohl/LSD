<template>
  <main :class="'page page-' + name">
    <div class="container">
      <slot></slot>
    </div>
    <!-- <slot v-else></slot> -->
  </main>
</template>

<script>
export default {
  props: {
    name: String,
    container: Boolean
  }
}
</script>

<style lang="scss">
  .page {
    & > .container {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
      overflow: hidden;
    }
  }
</style>
