<template lang="html">
  <v-page name="new-pass"  :container="true">
    <v-logo/>
    <v-text class="title">Change your password</v-text>
    <v-input>new password</v-input>
    <v-input> repeat new password</v-input>
    <v-button tag="button" class="primary" to="/newpass">Create</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
