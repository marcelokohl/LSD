<template lang="html">
  <v-page name="new-account" :container="true">
    <v-image src="logo.png"/>
    <v-input>Email</v-input>
    <v-input>Password</v-input>
    <v-input>Password</v-input>
    <v-select>Country</v-select>
    <v-button tag="button" to="/">Sing up</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
