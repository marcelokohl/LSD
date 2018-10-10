<template lang="html">
  <v-page name="new-pass"  :container="true">
    <v-image src="logo.png"/>
    <v-input>new password</v-input>
    <v-input> repeat new password</v-input>
    <v-button tag="button" to="/newpass">Create</v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
