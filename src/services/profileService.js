const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000
});

export default {
  async getUser() {
    const response = await api.get("/users/me", {
      headers: { token: localStorage.getItem("token") }
    });
    return response.data;
  }
};
