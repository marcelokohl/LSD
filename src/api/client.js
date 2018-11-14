import axios from "axios";
import { storage } from "@/helpers";

const baseURL =  process.env.VUE_API_HOST || "https://lsd-api-staging.herokuapp.com/api/v1";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  function(config) {
    const token = storage.getItem("token");
    if(token) {
      config.headers.common["Authorization"] = `Token token=${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default instance;
