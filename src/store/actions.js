import api from "@/api";
import { storage } from "@/helpers";
import dp from 'dot-prop';

const login = async ({ commit }, payload) => {
  const { email, password } = payload;

  const resp = await api.client.post("/login", {
    email,
    password
  });

  if (resp.ok) {
    commit("SET_USER", {
      ...resp.data.data.attributes,
      id: resp.data.data.id,
    });
    commit("SET_LOGGED_IN", true);
    storage.setItem("token", resp.data.data.attributes.token);
  } else {
    commit("SET_USER", {});
    commit("SET_LOGGED_IN", false);
  }

  return resp;
};

const loginSpotify = async ({ commit }, payload) => {
  storage.setItem("token", payload);

  const resp = await api.client.get(`/users/1`);

  if (resp.ok) {
    commit("SET_USER", {
      ...resp.data.data.attributes,
      id: resp.data.data.id,
    });
    commit("SET_LOGGED_IN", true);
  } else {
    commit("SET_USER", {});
    commit("SET_LOGGED_IN", false);
  }

  return resp;
};

const logout = async ({ commit }) => {
  storage.removeItem("token");
  commit("SET_USER", {});
  commit("SET_LOGGED_IN", false);

  return true;
};

const show = async ({ commit }) => {
  const resp = await api.client.get(`/users/1`);

  if (resp.ok) {
    commit("SET_USER", {
      ...resp.data.data.attributes,
      id: resp.data.data.id,
    });
    commit("SET_LOGGED_IN", true);
  } else {
    commit("SET_USER", {});
    commit("SET_LOGGED_IN", false);
  }

  return resp;
};

const me = async ({ commit }) => {
  const resp = await api.client.get(`/users/me`);

  if (resp.ok) {
    commit("SET_USER", {
      ...resp.data.data.attributes,
      id: resp.data.data.id,
    });
    commit("SET_LOGGED_IN", true);
  } else {
    commit("SET_USER", {});
    commit("SET_LOGGED_IN", false);
  }

  return resp;
};

const update = async (_, payload) => {
  const user = { ...payload };

  const resp = await api.client.put("/users/1", { user });

  return resp;
};

const register = async ({ commit }, payload) => {
  const { user } = payload;

  const resp = await api.client.post("/users/", { user });

  if (resp.ok) {
    commit("SET_USER", resp.data.data.attributes);
    commit("SET_LOGGED_IN", true);
    storage.setItem("token", resp.data.data.attributes.token);
  } else {
    commit("SET_USER", {});
    commit("SET_LOGGED_IN", false);
  }

  return resp;
};

const updatePassword = (_, payload) => {
  const {
    user: { old_password, password, password_confirmation }
  } = payload;

  return api.client.put("/users/update_password", {
    user: {
      old_password,
      password,
      password_confirmation
    }
  });
};

const requestNewPassword = (_, payload) => {
  const { email } = payload;

  return api.client.post("/users/request_new_password", { email });
};

const loadCountries = async ({ commit }) => {
  const resp = await api.client.get("/countries");
  if (resp.ok) {
    commit("SET_COUNTRIES", resp.data.data);
  } else {
    commit("SET_COUNTRIES", []);
  }

  return resp;
};

const getRanking = async ({ commit }, payload) => {
  const { world = "world", artist } = payload;
  const resp = await api.client.get(`/game/ranking/${world}/${artist}`);
  if (resp.ok) {
    const data = resp.data.data.reduce((acc, cur) => {
      const row = {
        user_id: dp.get(cur, 'relationships.user.data.id', null),
        user_nickname: dp.get(cur, 'relationships.user.data.nickname', null),
        image: dp.get(cur, 'relationships.user.data.image', null),
        score: dp.get(cur, `attributes.artists.${artist}`, 0),
      }

      return [
        ...acc,
        row,
      ];
    }, []);
    commit("SET_ARTIST_RANKING", { artist, data });
  } else {
    commit("SET_ARTIST_RANKING", { artist, data: [] });
  }

  return resp;
};

///game/ranking/1/sia

export default {
  login,
  loginSpotify,
  register,
  updatePassword,
  requestNewPassword,
  show,
  update,
  loadCountries,
  logout,
  getRanking,
  me
};
