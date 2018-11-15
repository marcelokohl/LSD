<template lang="html">
  <v-page name="new-pass"  :container="true">
    <v-logo/>
    <v-text class="title">Change your password</v-text>
    
    <v-input v-model="form.old_password" type="password">Old Password</v-input>
    <v-input v-model="form.password" type="password">Password</v-input>
    <v-input v-model="form.password_confirmation" type="password">Password Confirmation</v-input>
    
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
      }
    };
  },
  methods: {
    ...mapActions(["updatePassword"]),
    async submit() {
      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const r = await this.updatePassword({ user: this.form });
        // this.$router.push('main');
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
