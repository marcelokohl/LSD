<template lang="html">
  <v-image class="icon" :src="'icons/'+name+'.svg'" v-if="name"/>
</template>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="css">
</style>
