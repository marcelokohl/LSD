<template lang="html">
  <v-page name="new-pass"  :container="true">
    <v-logo/>
    <v-text class="title">Change your password</v-text>
    
    <v-input v-model="form.old_password" type="password" :feedback="feedback.old_password">Old Password</v-input>
    <v-input v-model="form.password" type="password" :feedback="feedback.password">Password</v-input>
    <v-input v-model="form.password_confirmation" type="password" :feedback="feedback.confirmation_password">Password Confirmation</v-input>
    
    <v-button tag="button" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Create</v-button>
  </v-page>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import Form from "@/mixins/Form";

export default {
  mixins: [Form],
  data() {
    return {
      form: {
        old_password: "",
        password: "",
        password_confirmation: ""
      },
      feedback: {
        old_password: [],
        password: [],
        password_confirmation: []
      },
    };
  },
  methods: {
    ...mapActions(["updatePassword"]),
    async submit() {
      this.resetFeedback();

      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const { ok, data } = await this.updatePassword({ user: this.form });

        if (ok) {
          this.$router.push('main');
        } else {
          this.fetchFeedbackWithErrors(data);
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
</style>
