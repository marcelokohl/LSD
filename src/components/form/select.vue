<template lang="html">
  <v-control :feedback="feedback" class="form-select">
    <label><slot></slot></label>
    <select v-model="inputVal" :disabled="disabled || busy" autocomplete="off">
      <option v-for="(option, $index) in options" :value="option.value" :key="$index">
        {{option.label}}
      </option>
    </select>
    <!-- feedback: {{feedback}} -->
  </v-control>
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
    },
    feedback: {
      type:Array,
    }
  },
  components: {
    "v-control": Control
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
};
</script>

<style lang="scss">
</style>
