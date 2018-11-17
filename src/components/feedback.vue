<template lang="html">
  <div class="form-feedback" :class="'form-feedback-type-' + type">
    <div v-if="data && data.length == 2" class="form-feedback-inner" :class="data[1]">
      {{data[0]}}

      <v-button v-if="type=='modal'" class="primary" :click="close">Fechar</v-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    type: {
      type: String
    }
  },
  methods: {
    close() {
      this.data = []
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";

  .form-feedback {

    &.form-feedback-type-control {
      color: red;
      font-family: font(label);
      text-transform: uppercase;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      -webkit-text-stroke: 1px black;
    }
    &.form-feedback-type-modal {
      .form-feedback-inner {
        color: white;
        font-family: font(label);
        text-transform: uppercase;
        font-size: 2rem;

        position: fixed;
        background: #00000099;
        top: 0; right: 0; bottom: 0; left: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .button {
          max-width: 360px!important;
          margin-top: 2rem;
        }
      }
    }
  }
</style>
