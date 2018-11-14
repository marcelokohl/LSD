export default {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_LOGGED_IN(state, payload) {
    state.logged = !!payload;
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload || [];
  }
}
