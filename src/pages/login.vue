<template lang="html">
  <v-page name="login">
    <v-image src="logo.png"/>
    <hr>
    <v-button tag="button" to="/">back</v-button>
    <hr>
    <v-input>Email</v-input>
    <hr>
    <v-input>Password</v-input>
    <hr>
    <v-button tag="button" to="/main">Login</v-button>
    <hr>
    <v-button to="/forgot">i forgot my password</v-button>
    <br>
    <v-button to="/newaccount">i dont't have an account</v-button>

  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
