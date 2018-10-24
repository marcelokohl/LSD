<template lang="html">
  <v-page name="login" :container="true">
    <v-logo/>
    -- {{$store.state.user}} --
    <v-text class="title">Login</v-text>
    <v-input v-model="user_email" type="email">Email</v-input>
    <v-input v-model="user_pass" type="password">Password</v-input>
    <v-button tag="button" class="primary" @click.native="login()">Login</v-button>
    <v-button class="link" to="/forgot">i forgot my password</v-button>
    <v-button class="link" to="/newaccount">i dont't have an account</v-button>
  </v-page>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user_email: 'marcelokohl@gmail.com',
      user_pass: '123456',
      info: null
    }
  },
  methods: {
   login: function () {
     axios
       .post('https://lsd-api-staging.herokuapp.com/api/v1/login', {
        "email": this.user_email,
        "password": this.user_pass
       })
       // .then(function (response) {
       //    // this.$store.state.user = response
       //    console.log(this.$store);
       //  })
        .then(response => (this.$store.state.user = response))
        // .then(this.$store.state.user => {
        //   commit('SET_USER', this.$store.state.user)
        // })
    }
 },

}
</script>

<style lang="scss">
  .page-login .page .container {
    // max-width: 500px;
    // margin-left: auto;
    // margin-right: auto;
  }
</style>
