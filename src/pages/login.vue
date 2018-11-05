<template lang="html">
  <v-page name="login" :container="true">
    <v-logo/>
    -- {{$store.state.user}} --
    <v-text class="title">Login</v-text>
    <v-input v-model="form.user_email" type="email">Email</v-input>
    <v-input v-model="form.user_pass" type="password">Password</v-input>
    <v-button v-if="!busy" tag="button" class="primary" @click.native="submitLogin()">Login</v-button>
    <v-button tag="button" class="primary" @click.native="show()">Show</v-button>
    <v-button tag="button" class="primary" @click.native="update()">Update</v-button>
    <v-button class="link" to="/forgot">i forgot my password</v-button>
    <v-button class="link" to="/newaccount">i dont't have an account</v-button>
  </v-page>
</template>

<script>
// import axios from 'axios'
import {mapMutations, mapActions} from 'vuex'

export default {
  async created() {
    await this.show()
  },
  data () {
    return {
      form: {
        user_email: 'marcelokohl@gmail.com',
        user_pass: '123456',
      },
      busy: false,

    }
  },
  methods: {
    // ...mapMutations(['SET_USER']),
    ...mapMutations({setUser: 'SET_USER'}), //SPREAD OPERATOR
    ...mapActions(['login', 'show', 'update']),
    // submitLogin () {
    //   this.busy = true
    //   this.login(this.form).then(() => {
    //     this.busy = false
    //   }).catch(() => {
    //
    //   })
    // },
    async submitLogin () {
      // this.busy = true
      // const r = await this.login(this.form)
      // this.busy = false11
    },

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
