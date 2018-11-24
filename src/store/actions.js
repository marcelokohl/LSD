import api from "@/api";
import { storage } from "@/helpers";

const login = async ({ commit }, payload) => {
  const { email, password } = payload;

  const resp = await api.client.post("/login", {
    email,
    password
  });

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

const loginSpotify = async ({ commit }, payload) => {
  storage.setItem("token", payload);
  
  const resp = await api.client.get(`/users/1`);

  if (resp.ok) {
    commit("SET_USER", resp.data.data.attributes);
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
    commit("SET_USER", resp.data.data.attributes);
    commit("SET_LOGGED_IN", true);
  } else {
    commit("SET_USER", {});
    commit("SET_LOGGED_IN", false);
  }

  return resp;
};

const update = async (_, payload) => {
  const user = { ...payload };

  const resp = await api.client.put("/users/1", user);

  return resp;
};

const register = ({ commit }, payload) => {
  const {
    user: { name, email, password, password_confirmation, nickname, country_id }
  } = payload;

  return api.client
    .post("/users/", {
      name,
      nickname,
      email,
      password,
      password_confirmation,
      country_id
    })
    .then(response => {
      commit("SET_USER", response.data.data.attributes);
      commit("SET_LOGGED_IN", true);
      storage.setItem("token", response.data.data.attributes.token);
    })
    .catch(err => {
      commit("SET_USER", {});
      commit("SET_LOGGED_IN", false);
    });
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

const loadCountries = ({ commit }) => {
  return api.client
    .get("/countries")
    .then(response => {
      commit("SET_COUNTRIES", response.data.data);
    })
    .catch(err => {
      commit("SET_COUNTRIES", []);
    });
};

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
};
