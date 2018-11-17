import { create } from 'apisauce'

import { storage } from "@/helpers";

const baseURL =  process.env.VUE_API_HOST || "https://lsd-api-staging.herokuapp.com/api/v1";

const api = create({
  baseURL,
});

api.addRequestTransform(request => {
  const token = storage.getItem("token");
  if(token) {
    request.headers["Authorization"] = `Token token=${token}`;
  }
})

export default api;
