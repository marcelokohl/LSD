<template lang="html">
  <v-page name="forgot" :container="true">
    <v-image src="logo.png"/>
    <v-back to="/login"/>
    <v-input>Email</v-input>
    <v-button tag="button" to="/newpass">Send</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
