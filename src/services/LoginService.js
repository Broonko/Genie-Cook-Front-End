const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000,
});

export default {
  async access(email, password) {
    console.log('login service')
     const response = await api.post('/auth/login', {
      email: email,
      password : password
    })
    console.log('aqui')
    return response.data;
  },
}
