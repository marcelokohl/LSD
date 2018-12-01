export default {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_LEVEL(state, payload) {
    if(payload > state.user.game.campaign.process) state.user.game.campaign.process = payload
  },
  SET_SCORE(state, payload) {
    if(payload > state.user.game.campaign.process) state.user.game.campaign.process = payload
  },
  SET_LOGGED_IN(state, payload) {
    state.logged = !!payload;
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload || [];
  }
}
