import { create } from 'apisauce'

import { storage } from "@/helpers";

const baseURL =  process.env.VUE_APP_API_HOST || "";

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
