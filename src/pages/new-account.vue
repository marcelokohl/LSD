<template lang="html">
  <v-page name="new-account" :container="true">
    <v-logo/>
    <v-text class="title">Create an account</v-text>
    <v-input v-model="form.name" type="text">Name</v-input>
    <v-input v-model="form.nickname" type="text">Nickname</v-input>
    <v-input v-model="form.email" type="text" :feedback="feedback.email">Email</v-input>
    <v-input v-model="form.password" type="password" :feedback="feedback.password">Password</v-input>
    <v-input v-model="form.password_confirmation" type="password">Password Confirmation</v-input>
    <v-select v-model="form.country_id" :options="countriesOptions">Country</v-select>
    <v-button tag="button" class="primary" :click="submit" :busy="isBusy" :disabled="!canSubmit">Sign up</v-button>
    <v-button tag="button" class="secondary" to="/login">Back</v-button>
  </v-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Form from "@/mixins/Form";

export default {
  mixins: [Form],
  data() {
    return {
      form: {
        name: "mario",
        nickname: "mario",
        email: "mario@test.com",
        password: "123456",
        password_confirmation: "123456",
        country_id: null
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    async submit() {
      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const { ok, data } = await this.register({ user: this.form });

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
  },
  computed: {
    ...mapGetters(["countries"]),
    countriesOptions() {
      if (!this.countries) return [];

      return this.countries.map(country => ({
        value: country.id,
        label: country.attributes.name
      }));
    }
  }
};
</script>

<style lang="scss">
</style>
