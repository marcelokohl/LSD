<template lang="html">
  <div class="feedback" :class="'feedback-type-' + type">
    <div v-if="data && data[0] && data.length == 2" class="feedback-inner" :class="data[1]">
      <span class="feedback-icon">!</span>{{data[0]}}

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
      // this.data = []; // não dá pra mudar o valor de uma prop // Eu tava ligado, só não sabia como resolver ainda :)
      this.$root.$emit('close-feedback-modal', true);
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";

  .feedback {
    .feedback-icon {
      background: color(error);
      color: color(white);
      width: 1.4em;
      height: 1.4em;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      margin-right: 1em;
      display: none;
    }
    &.feedback-type-control {
      .error {
        color: color(error);
          .feedback-icon {
            display: inline-flex;
          }
      }
      font-family: font(label);
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    &.feedback-type-modal {
      .feedback-inner {
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
