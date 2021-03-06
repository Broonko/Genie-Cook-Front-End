const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000,
});

export default {
  async register(name, email, password) {
     const response = await api.post('/auth/userSignup', {
      name: name,
      email: email,
      password : password
    })
    return response.data;
  },
}