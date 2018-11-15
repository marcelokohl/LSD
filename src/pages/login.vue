<template lang="html">
  <v-page name="login" :container="true">
    <v-logo/>
    <v-text class="title">Login</v-text>
    <v-input v-model="form.email" type="text">Email</v-input>
    <v-input v-model="form.password" type="password">Password</v-input>

    <v-button tag="button" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Login</v-button>
    <v-button class="link" to="/forgot">i forgot my password</v-button>
    <v-button class="link" to="/newaccount">i dont't have an account</v-button>
  </v-page>
</template>

<script>
import { mapActions } from "vuex";
import Form from "@/mixins/Form";

export default {
  mixins: [Form],
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const r = await this.login(this.form);
        this.$router.push('main');
      } catch (error) {
        console.error(error);
      } finally {
        this.setBusy(false);
      }
    }
  }
};
</script>

<style lang="scss">
.page-login .page .container {
  // max-width: 500px;
  // margin-left: auto;
  // margin-right: auto;
}
</style>
