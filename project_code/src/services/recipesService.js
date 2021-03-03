const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 2000,
});

export default {
  async getAllRecipes() {
    //let query = "chicken";
    const response = await api.get("/recipes/");
    return response;
  },
};
