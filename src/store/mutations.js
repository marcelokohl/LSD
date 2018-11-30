export default {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_LEVEL(state, payload) {
    console.log(payload);
    console.log(state.user.game.campaign.process);
    if(payload > state.user.game.campaign.process) state.user.game.campaign.process = payload
  },
  SET_LOGGED_IN(state, payload) {
    state.logged = !!payload;
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload || [];
  }
}
