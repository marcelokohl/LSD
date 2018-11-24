<template lang="html">
  <v-page name="forgot" :feedback="[feedback.default_error, 'error']" :container="true">
    <v-logo/>
    <v-text class="title">I forgot my password</v-text>
    <v-text class="subtitle">Enteder your redisted... Enteder your redisted... Enteder your redisted...</v-text>
    <span v-if="successMessage">
      <v-text class="title">{{successMessage}}</v-text>  
    </span>
    <span v-else>
      <v-input v-model="form.email" type="text">Email</v-input>
      <v-button tag="button" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Send</v-button>
    </span>
    <v-button tag="button" class="secondary" to="/login">Back</v-button>
  </v-page>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
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
      },
      successMessage: null,
    };
  },
  methods: {
    ...mapActions(["requestNewPassword"]),
    async submit() {
      this.resetFeedback();
      
      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const { ok, data } = await this.requestNewPassword(this.form);

        if (ok) {
          // this.$router.push('login')
          this.successMessage = data.message;
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
</style>
