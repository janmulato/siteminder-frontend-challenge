import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

client.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["apikey"] = process.env.VUE_APP_API_KEY;
  return config;
});

export default client;
