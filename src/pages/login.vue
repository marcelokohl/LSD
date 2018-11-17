<template lang="html">
  <v-page name="login" :container="true">
    <v-logo/>
    <v-form :on-submit="submit">
      <v-text class="title">Login</v-text>
      <v-input v-model="form.email" type="text">Email </v-input>
      <v-input v-model="form.password" type="password" :feedback="feedback.detail">Password</v-input>

      <v-button button-type="submit" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Login</v-button>
      <v-button class="link" to="/forgot">i forgot my password</v-button>
      <v-button class="link" to="/newaccount">i dont't have an account</v-button>
    </v-form>
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
        email: "e12e12",
        password: "21e12e"
      },
      feedback: {
        detail: [],
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const { ok, data } = await this.login(this.form);

        if (ok) {
          this.$router.push('main');
        } else {
          this.fetchFeedbackWithErrors(data.errors)
        }
      } catch (error) {
        this.setFeedbackForField('detail', ['error', 'error']);
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
