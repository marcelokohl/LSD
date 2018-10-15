<template lang="html">
  <v-page name="forgot" :container="true">
    <v-image src="logo.png"/>
    <v-text class="title">I forgot my password</v-text>
    <v-text class="subtitle">Enteder your redisted... Enteder your redisted... Enteder your redisted...</v-text>
    <v-input>Email</v-input>
    <v-button tag="button" class="primary" to="/newpass">Send</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
