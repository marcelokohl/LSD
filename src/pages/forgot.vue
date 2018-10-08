<template lang="html">
  <v-page name="forgot">
    <v-image src="logo.png"/>
    <hr>
    <v-back to="/login"/>
    <hr>
    <v-input>Email</v-input>
    <hr>
    <v-button tag="button" to="/newpass">Send</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
