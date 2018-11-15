import api from "@/api";
import { storage } from "@/helpers";

const login = ({ commit }, payload) => {
  const { email, password } = payload;

  return api.client
    .post("/login", {
      email,
      password
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
  api.client.put("/users/1", {
    user: {
      name: "Marcelo 55",
      email: "marcelokohl@gmail.com",
      country_id: "1",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQImWO49/AZAAVGAqbcxZMQAAAAAElFTkSuQmCC"
    }
  });
};

// Register
const register = ({ commit }, payload) => {
  const {
    user: { name, email, password, password_confirmation, country_id }
  } = payload;

  return api.client
    .post("/users/", {
      name,
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

// Update Password
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

// Update User

// Request new password
const requestNewPassword = (_, payload) => {
  const { email } = payload;

  return api.client.post("/users/request_new_password", { email });
};
// Show user data

// get country
const loadCountries = ({ commit }) => {
  return api.client
    .get("/countries")
    .then(response => {
      commit("SET_COUNTRIES", response.data.data);
    })
    .catch(err => {
      commit("SET_COUNTRIES", []);
      console.error(err);
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
