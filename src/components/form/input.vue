<template lang="html">
  <v-control>
    <label><slot></slot></label>
    <input v-model="inputVal" ref="input":type="type" :disabled="disabled || busy">
    <!-- feedback: {{feedback}} -->
    <v-feedback :data="feedback"></v-feedback>
  </v-control>
</template>

<script>
import Control from './control.vue'
import Feedback from './feedback.vue'

export default {
  props: {
    value:String,
    type: {
      type:String,
      default: 'text',
    },
    disabled: {
      type:Boolean,
      default: false,
    },
    busy: {
      type:Boolean,
      default: false,
    },
    feedback: {
      type:Array,
    }
  },
  components: {
    'v-control': Control,
    'v-feedback': Feedback
  },
  data() {
    return { inputVal: this.value }
  },
  watch: {
    value(val){
      this.inputVal = val;
    },
    inputVal(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style lang="scss">
</style>
