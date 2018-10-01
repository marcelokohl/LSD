<template lang="html">
  <v-page name="login">
    <v-link tag="button" to="/">back</v-link>
    <hr>
    <v-input>Email</v-input>
    <hr>
    <v-input>Password</v-input>
    <hr>
    <v-link tag="button" to="/">Login</v-link>
    <hr>
    <v-link to="/forgot">i forgot my password</v-link>
    <br>
    <v-link to="/">i dont't have an account</v-link>

  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
