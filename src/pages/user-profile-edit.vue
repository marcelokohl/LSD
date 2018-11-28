<template lang="html">
  <v-page name="user-profile-edit" :container="true">
    <div class="top">
      <v-button tag="a" class="no-style" back>
        &lt;
      </v-button>
    </div>
    <v-user-avatar :avatar="form.image" :remote="true"/>
    <v-button tag="a" class="no-style picture-button">
      Change profile picture
    </v-button>

    <v-input v-model="form.name" type="text">Name</v-input>
    <v-input v-model="form.nickname" type="text":feedback="feedback.nickname">Nickname</v-input>
    <v-input v-model="form.email" type="text" :feedback="feedback.email">Email</v-input>
    <v-select v-model="form.country_id" :options="countriesOptions">Country</v-select>

    <v-button button-type="submit" class="save-button" :click="submit" :busy="isBusy" :disabled="!canSubmit">Save</v-button>
    <v-button tag="button" class="primary back-button" back>
      Back
    </v-button>
    <v-button tag="button" class="primary close-button" to="/main">
      Close
    </v-button>
  </v-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Form from "@/mixins/Form";

export default {
  mixins: [Form],
  mounted() {

    const { name, nickname, image, country, email } = this.user;

    this.setForm({
      name,
      nickname,
      image,
      country_id: `${country.id}`,
      email
    });
  },
  data() {
    return {
      form: {
        name: "",
        nickname: "",
        email: "",
        country_id: null,
        image: null,
      }
    };
  },
  methods: {
    ...mapActions(["update"]),
    async submit() {
      this.resetFeedback();

      if (!this.canSubmit) return;

      try {
        this.setBusy(true);
        const { ok, data } = await this.update(this.form);

        if (ok) {
          // this.$router.push('main');
          // console.log(data, this.feedback)
          //   ...data,




          // this.feedback = {
          //   ...this.feedback,
          // }

          this.fetchFeedbackWithErrors(data);
          console.log('this.feedback', this.feedback)
        } else {
          // this.setFeedbackField('default_error', data.default_error)
          this.setFeedbackField('default_error', data.default_error)
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
    ...mapGetters(['avatar', 'user', 'game']),
    countriesOptions() {
      if (!this.countries) return [];

      return this.countries.map(country => ({
        value: country.id,
        label: country.attributes.name
      }));
    }
  },
  watch: {
    user(val) {
      console.log("val", val);
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/colors.scss";
@import "@/scss/fonts.scss";
@import "@/scss/breakpoints.scss";

.page-user-profile-edit {
  .page {
    background-color: #fff;
    .container {
      max-width: 420px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2em;
      .button {
        font-size: font-size(l);
        font-family: font(button);
        color: color(button-primary);
        text-transform: uppercase;
        text-decoration: none;
      }
    }
    .user-avatar {
      position: unset;
      font-size: 150px;
      display: flex;
      justify-content: center;
    }
    .edit-title {
      font-family: font(title);
      color: #63005e;
      font-size: font-size(l);
      margin-bottom: 1.5rem;
      text-transform: uppercase;
    }
    .picture-button {
      font-family: font(button);
      color: #41b0ff;
      font-size: font-size(m);
      margin: 1.5rem 0;
      display: block;
      text-transform: uppercase;
    }
    .form-control label {
      color: black;
      font-family: font(label);
      text-transform: uppercase;
      font-size: font-size(m);
      margin-bottom: 0.7rem;
      display: block;
    }
    // .user-menu {
    .close-button {
      display: none !important;
    }
    .back-button {
      display: none !important;
    }
    // }

    @include breakpoint-desktop() {
      .top {
        display: none;
      }
      .close-button {
        margin-top: 4rem;
        display: flex !important;
      }
      .back-button {
        display: flex !important;
      }
    }
  }
}
</style>
