<template lang="html">
  <v-page name="login" :container="true">
    <v-logo/>
    <v-text class="title">Login</v-text>
    <v-input>Email</v-input>
    <v-input>Password</v-input>
    <v-button tag="button" class="primary" to="/main">Login</v-button>
    <v-button class="link" to="/forgot">i forgot my password</v-button>
    <v-button class="link" to="/newaccount">i dont't have an account</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
  .page-login .page .container {
    // max-width: 500px;
    // margin-left: auto;
    // margin-right: auto;
  }
</style>
