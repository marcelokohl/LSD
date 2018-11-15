<template lang="html">
  <div class="form-control form-select">
    <label><slot></slot></label>
    <select v-model="inputVal" :disabled="disabled || busy">
      <option v-for="(option, $index) in options" :value="option.value" :key="$index">
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script>
import Control from "./control.vue";

export default {
  props: {
    value: String,
    options: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "v-control": Control
  },
  data() {
    return { inputVal: this.value };
  },
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/fonts.scss";

.form-select {
  label {
    color: color(label);
    font-family: font(label);
    text-transform: uppercase;
    font-size: 2rem;
  }
  select {
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
    appearance: none;
    -webkit-appearance: none;
    background-image: url("../../assets/images/select-arrow.svg");
    background-repeat: no-repeat;
    background-position: center right 37px;
  }
}
</style>
