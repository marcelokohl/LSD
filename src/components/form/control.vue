<template lang="html">
  <div class="form-control" :class="feedback?'form-control-feedback-' + feedback[1]:''">
    <slot></slot>
    <v-feedback type="control" :data="feedback"></v-feedback>
  </div>
</template>

<script>
import Feedback from '@/components/feedback.vue'

export default {
  components: {
    'v-feedback': Feedback
  },
  props: {
    feedback: {
      type:Array,
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";

  .form-control {
    margin-bottom: 2rem;

    label {
      color: color(white);
      font-family: font(label);
      text-transform: uppercase;
      font-size: font-size(m);
      margin-bottom: 1rem;
      -webkit-text-stroke: 1px black;
    }
    input, select {
      background-color: color(white);
      height: 3em;
      border-radius: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.2em;
      color: color(form-control);
      font-size: font-size(m);
      font-family: font(button);
      border: 2px solid black;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    select {
      appearance: none;
      -webkit-appearance: none;
      background-image: url("../../assets/images/select-arrow.svg");
      background-repeat: no-repeat;
      background-position: center right 37px;
    }

    &.form-control-feedback-error {
      label {
        color: color(error);
      }
      input, select {
        border-color: color(error)
      }
    }
  }
</style>
