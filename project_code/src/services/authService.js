const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000,
});

export default {
  async register(name, email, password) {
    //let query = "chicken";
    console.log(signup)
    console.log('hola llegue a service')
    console.log(this.name)
    const response = await api.post('/auth/signup', {
      name: name,
      email: email,
      password : password
    })
    return response;
  },
}