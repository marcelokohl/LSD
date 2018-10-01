<template lang="html">
  <v-image :src="'images/icons/'+name+'.ico'" v-if="name"/>
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
