const axios = require("axios");
const api = axios.create({
  baseURL: "https://genie-cook.herokuapp.com//api",
  timeout: 6000
});

export default {
  async register(name, email, password) {
    const response = await api.post("/auth/signup", {
      name: name,
      email: email,
      password: password
    });
    return response.data;
  }
};
