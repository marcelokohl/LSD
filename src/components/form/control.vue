<template lang="html">
  <div class="form-control">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";

  .form-control {
    margin-bottom: 2rem;

    label {
      color: color(label);
      font-family: font(label);
      text-transform: uppercase;
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }
    input {
      background-color: color(white);
      height: 3em;
      border-radius: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.2em;
      color: color(form-control);
      font-size: 1.7rem;
      font-family: font(button);
      border: 2px solid black;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
  }
</style>
