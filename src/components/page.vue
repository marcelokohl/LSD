<template>
  <main :class="'page page-' + name">
    <div class="container">
      <slot></slot>
    </div>
    <v-feedback :data="feedback" type="modal"></v-feedback>
    <div v-if="loading" class="loading">
      Carregando...
    </div>
  </main>
</template>

<script>
import Feedback from '@/components/feedback.vue'

export default {
  components: {
    'v-feedback': Feedback
  },
  props: {
    name: String,
    container: Boolean,
    loading: Boolean,
    feedback: {
      type:Array,
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/colors.scss";
  @import "@/scss/fonts.scss";
  
  .page {
    & > .loading {
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
    }
    & > .container {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      padding: 1em;
      overflow: hidden;
    }
  }
</style>
