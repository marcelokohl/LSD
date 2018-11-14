import api from "@/api";
import { storage } from "@/helpers";

const login = ({ commit }, payload) => {
  return api.client
    .post("/login", {
      email: payload.user_email,
      password: payload.user_pass
    })
    .then(response => {
      commit("SET_USER", response.data.data);
      commit("SET_LOGGED_IN", true);
      storage.setItem("token", response.data.data.attributes.token);
    })
    .catch(err => {
      commit("SET_USER", {});
      commit("SET_LOGGED_IN", false);
      console.error(err);
    });
};

const show = ({ commit }) => {
  api.client.get(`/users/1`).then(response => {
    // this.SET_USER(response.data.data)
    // this.setUser(response.data.data)
    // this.$store.commit('SET_USER', response.data.data)
  });
};

const update = ({ commit }, payload) => {
  api.client
    .put("/users/1", {
      user: {
        name: "Marcelo 55",
        email: "marcelokohl@gmail.com",
        country_id: "1",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQImWO49/AZAAVGAqbcxZMQAAAAAElFTkSuQmCC"
      }
    })
    // .then(function (response) {
    //    console.log(this.$store);
    //    // this.$store.state.user = response
    //  })
    .then(response => {
      console.log("foi");
      console.log(response);
      // commit('SET_USER', response.data.data)
      // window.localStorage.setItem('token',JSON.stringify(response.data.data.attributes.token))
      // instance.defaults.headers.common['Authorization'] = 'Token token=' + response.data.data.attributes.token
      // this.SET_USER(response.data.data)
      // this.setUser(response.data.data)
      // this.$store.commit('SET_USER', response.data.data)
    });
  // .then(this.$store.state.user => {
  //   commit('SET_USER', this.$store.state.user)
  // })
};

// Register

// Update Password

// Update User

// Request new password

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
  show,
  update,
  loadCountries
};
