<template lang="html">
  <div class="form-feedback">
    <div v-if="data" class="form-feedback-inner" :class="data[1]">
      {{data[0]}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";

  .form-feedback {
    color: red;
    font-family: font(label);
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    -webkit-text-stroke: 1px black;
    .error {
    }
  }
</style>
