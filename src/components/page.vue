<template>
  <main class="page">
    <div v-if="container" class="container">
      <slot></slot>
    </div>
    <slot v-else></slot>
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
    text-align: center;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 3;
    overflow: auto;

    & > .container {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      padding: 1em; 
    }
  }
</style>
