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

const show = ({ commit }) => {
  api.client
    .get(`/users/1`)
    .then(response => {
      commit("SET_USER", response.data.data.attributes);
      commit("SET_LOGGED_IN", true);
    })
    .catch(err => {
      commit("SET_USER", {});
      commit("SET_LOGGED_IN", false);
    });
};

const update = ({ commit }, payload) => {
  const {
    user: { name, email, country_id, image }
  } = payload;

  api.client.put("/users/1", {
    user: {
      name,
      email,
      country_id,
      image
    }
  });
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
  register,
  updatePassword,
  requestNewPassword,
  show,
  update,
  loadCountries
};
