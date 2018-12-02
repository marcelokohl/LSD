export default {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_GAME_NAME(state, payload) {
    state.current_game = payload
  },
  SET_LEVEL(state, payload) {
    if(payload > state.user.game.campaign.process) state.user.game.campaign.process = payload
  },
  SET_SCORE(state, payload) {
    if(payload > state.user.game.arcade[state.current_game]) state.user.game.arcade[state.current_game] = payload
  },
  SET_LOGGED_IN(state, payload) {
    state.logged = !!payload;
  },
  SET_COUNTRIES(state, payload) {
    state.countries = payload || [];
  },
  SET_ARTIST_RANKING(state, { artist, data }) {
    state.rankings[artist] = data || [];
  }
}
