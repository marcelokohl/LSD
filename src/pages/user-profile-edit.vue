<template lang="html">
  <v-page name="user-profile-edit" :container="true">
    <div class="top">
      <v-button tag="a" class="no-style" back>
        &lt;
      </v-button>
    </div>
    <v-user-avatar />
    <v-button tag="a" class="no-style picture-button">
      Change profile picture
    </v-button>

    <v-input v-model="$store.state.user.nickname">Nickname</v-input>
    <v-input v-model="$store.state.user.email">Email</v-input>
    <v-text class="edit-title">Change your password</v-text>
    <v-input type="password">Old Password</v-input>
    <v-input type="password">New Password</v-input>
    <v-input type="password">Repeat New Password</v-input>

    <v-button tag="button" class="save-button" to="/">
      Save
    </v-button>
    <v-button tag="button" class="primary back-button" back>
      Back
    </v-button>
    <v-button tag="button" class="primary close-button" to="/main">
      Close
    </v-button>
  </v-page>
</template>

<script>

export default {
}
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
          font-size: 2.1rem;
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
        color: #63005E;
        font-size: 3rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
      }
      .picture-button {
        font-family: font(button);
        color: #41B0FF;
        font-size: 1.4rem;
        margin: 1.5rem 0;
        display: block;
        text-transform: uppercase;
      }
      .form-control label {
        color: black;
        font-family: font(label);
        text-transform: uppercase;
        font-size: 1.6rem;
        margin-bottom: .7rem;
        display: block;
      }
      // .user-menu {
      .close-button {
        display: none!important;
      }
      .back-button {
        display: none!important;
      }
      // }

      @include breakpoint-desktop() {
        .top {
          display: none;
        }
        .close-button {
          margin-top: 4rem;
          display: flex!important;
        }
        .back-button {
          display: flex!important;
        }
      }
    }
  }
</style>
