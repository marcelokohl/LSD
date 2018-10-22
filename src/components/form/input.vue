<template lang="html">
  <v-control>
    <label><slot></slot></label>
    <input :value="value" :type="type">
  </v-control>
</template>

<script>
import Control from './control.vue'

export default {
  props: {
    value:String,
    type: {
      type:String,
      default: 'text'
    }
  },
  components: {
    'v-control': Control
  }
}
</script>

<style lang="scss">
</style>
