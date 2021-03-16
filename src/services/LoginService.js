const axios = require("axios");
const api = axios.create({
  baseURL: "https://genie-cook.herokuapp.com//api",
  timeout: 6000
});

export default {
  async access(email, password) {
    console.log("login service");
    const response = await api.post("/auth/login", {
      email: email,
      password: password
    });
    console.log(response.data);
    return response.data;
  }
};
