<template lang="html">
  <v-page name="forgot" :container="true">
    <v-logo/>
    <v-text class="title">I forgot my password</v-text>
    <v-text class="subtitle">Enteder your redisted... Enteder your redisted... Enteder your redisted...</v-text>
    <v-input v-model="form.email" type="text">Email</v-input>
    <v-button tag="button" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Send</v-button>
    <!-- <v-button tag="button" class="primary" to="/newpass">Send</v-button> -->
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
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["requestNewPassword"]),
    async submit() {
      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const r = await this.requestNewPassword(this.form);
        this.$router.push('login');
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
</style>
