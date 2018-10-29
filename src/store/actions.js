import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://lsd-api-staging.herokuapp.com/api/v1',
  headers: {
    // 'Authorization': 'Token token=QyXVwIkA521ujs4Q2vmJruOaA6mTILKwAQbZ4NWy'
  }
})

const login = ({ commit }, payload) => {
  return instance
    .post('/login', {
      "email": payload.user_email,
      "password": payload.user_pass
    })
   // .then(function (response) {
   //    // this.$store.state.user = response
   //    console.log(this.$store);
   //  })
    .then(response => {
      commit('SET_USER', response.data.data)
      window.localStorage.setItem('token',JSON.stringify(response.data.data.attributes.token))
      instance.defaults.headers.common['Authorization'] = 'Token token=' + response.data.data.attributes.token
      // this.SET_USER(response.data.data)
      // this.setUser(response.data.data)
      // this.$store.commit('SET_USER', response.data.data)
    })
    // .then(this.$store.state.user => {
    //   commit('SET_USER', this.$store.state.user)
    // })

}

const show = ({ commit }, payload) => {
  instance
    .get('/users/1', {})
    .then(response => {
      commit('SET_USER', response.data.data)
      window.localStorage.setItem('token',JSON.stringify(response.data.data.attributes.token))
      // this.SET_USER(response.data.data)
      // this.setUser(response.data.data)
      // this.$store.commit('SET_USER', response.data.data)
    })
};

export default {
  login,
  show,
}
