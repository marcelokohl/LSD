<template lang="html">
  <v-page name="login" :container="true" :feedback="[feedback.default_error, 'error']" :loading="isBusy">
    <v-logo/>
    <v-form :on-submit="submit" autocomplete="off">
      <v-text class="title">Login</v-text>
      <v-input v-model="form.email" type="text" :feedback="feedback.email">Email </v-input>
      <v-input v-model="form.password" type="password">Password</v-input>

      <v-button button-type="submit" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Login</v-button>
      <v-button tag="button" class="secondary" to="/home">Back</v-button>
      <v-button class="link" to="/forgot">i forgot my password</v-button>
      <v-button class="link" to="/newaccount">i don't have an account</v-button>
    </v-form>
  </v-page>
</template>
<script>
import { mapActions } from "vuex";
import Form from "@/mixins/Form";

export default {
  mixins: [Form],
  mounted(){
    this.$root.$on('close-feedback-modal', this.resetFeedback);
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      feedback: {
        detail: [],
        email: []
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      this.resetFeedback();

      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const { ok, data } = await this.login(this.form);

        if (ok) {
          this.$router.push('main');
        } else {
          this.setFeedbackField('default_error', data.default_error)
        }
      } catch (error) {
        console.error(error)
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
