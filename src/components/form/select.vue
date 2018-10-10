<template lang="html">
  <div class="form-control form-select">
    <label><slot></slot></label>
    <select>
      <option value="">Brazil</option>
    </select>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";

  .form-select {
    label {
      color: color(label);
      font-family: font(label);
      text-transform: uppercase;
      font-size: 2em;
    }
    select {
      background-color: color(white);
      height: 3.4em;
      border-radius: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.2em;
      color: color(form-control);
      font-size: 1.7em;
      font-family: font(button);
      border: 2px solid black;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
