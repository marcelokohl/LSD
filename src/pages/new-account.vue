<template lang="html">
  <v-page name="new-account" :container="true">
    <v-logo/>
    <v-text class="title">Create an account</v-text>
    <v-input>Email</v-input>
    <v-input>Password</v-input>
    <v-input>Password</v-input>
    <v-select>Country</v-select>
    <v-button tag="button" class="primary" to="/">Sing up</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
