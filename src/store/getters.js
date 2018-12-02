import dp from "dot-prop";

const loggedIn = state => dp.get(state, "logged", false);

const user = state => dp.get(state, "user", {});

const avatar = state => dp.get(state, "user.image", null);

const game = state => dp.get(state, "user.game", {});

const countries = state => state.countries || [];

const campaignProgress = state => 13
  // dp.get(state, "user.game.campaign.process", 0);

export default {
  countries,
  campaignProgress,
  user,
  game,
  avatar,
  loggedIn
};
