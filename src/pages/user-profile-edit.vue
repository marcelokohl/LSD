<template lang="html">
  <v-page name="user-profile-edit">
    <v-button tag="a" class="no-style" to="/">
      X
    </v-button>
    <v-user-avatar />
    <v-button tag="a" class="no-style" :to="{name:'user-profile-edit'}">
      Chnge profile picture
    </v-button>

    <v-input>Nickname</v-input>
    <v-input>Email</v-input>
    <v-text>Change your password</v-text>
    <v-input>Old Password</v-input>
    <v-input>New Password</v-input>
    <v-input>Repeat New Password</v-input>

    <v-button tag="button" to="/">
      Save
    </v-button>
  </v-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">
</style>
